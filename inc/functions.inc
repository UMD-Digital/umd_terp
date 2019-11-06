<?php

use Drupal\Core\Cache\CacheableMetadata;
use Drupal\node\Entity\Node;

/**
 * Allows regions to be added to nodes/other entities, not just pages.
 *
 * @param $allowed_regions
 *   The region/s you wish to be available. We do this in order to not have it run for all, every time.
 * @param $variables
 *   The variables for node/etc, lets us set custom vars.
 *
 * @return array
 */
function _umd_terp_add_regions_to_entity($allowed_regions, &$variables) {
  $theme = \Drupal::theme()->getActiveTheme()->getName();
  $available_regions = system_region_list($theme, 'REGIONS_ALL');
  $regions = array_intersect(array_keys($available_regions), $allowed_regions);
  foreach ($regions as $key => $region) {
    $blocks = entity_load_multiple_by_properties('block', array('theme' => $theme, 'region' => $region));
    uasort($blocks, 'Drupal\block\Entity\Block::sort');
    $build = array();
    foreach ($blocks as $key => $block) {
      if ($block->access('view')) {
        $build[$key] = entity_view($block, 'block');
      }
    }
    $variables[$region] = $build;
  }
}

/**
 * Make all theme settings available to insert in pages/nodes/etc.
 * Added to pages by default in hook_preproccess_node above, can extent in subtheme to nodes/etc if needed.
 * Use in theme by var name, as {{twitter_link}} /etc.
 */
function _umd_terp_extend_theme_variables(&$variables){
  $variables['site_name'] = \Drupal::config('system.site')->get('name');
  $variables['theme_name'] = \Drupal::theme()->getActiveTheme()->getName();
  $variables['site_slogan'] = \Drupal::config('system.site')->get('slogan');
  $variables['theme_path'] = file_create_url(drupal_get_path('theme', $variables['theme_name']));
  $theme_settings = \Drupal::config($variables['theme_name'] . '.settings');
  CacheableMetadata::createFromRenderArray($variables)
    ->addCacheableDependency($theme_settings)
    ->applyTo($variables);
  $variables += $theme_settings->getOriginal();
  // Add full assets_path
  $variables['assets_path'] = $variables['theme_path'] . $variables['umd_terp_assets_path'];
}

function _umd_terp_get_node_by_route() {
  $route_name = \Drupal::routeMatch()->getRouteName();
  $node = FALSE;
  switch ($route_name) {
    case 'entity.node.canonical':
      $node = \Drupal::routeMatch()->getParameter('node');
      break;
    case 'entity.node.preview':
      $node = \Drupal::routeMatch()->getParameter('node_preview');
      break;

    case 'entity.node.revision':
      $revision_id = \Drupal::routeMatch()->getParameter('node_revision');
      $node = \Drupal::entityTypeManager()->getStorage('node')->loadRevision($revision_id);
      break;
    case 'entity.node.latest_version':
      $node = \Drupal::routeMatch()->getParameter('node');
      break;
  }
  if (is_numeric($node)) {
    $node = \Drupal\node\Entity\Node::load($node);
  }
  return !empty($node) ? $node : FALSE;
}
