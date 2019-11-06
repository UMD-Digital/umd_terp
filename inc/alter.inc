<?php

/**
 * Implements hook_theme_suggestions_HOOK_alter().
 */
function umd_terp_theme_suggestions_page_alter(array &$suggestions, array $variables) {
  if ($node = \Drupal::routeMatch()->getParameter('node')) {
    // When viewing a revision $node will be numeric.
    // @see https://www.drupal.org/node/2495703

    if (is_numeric($node)) {
      $node = Node::load($node);
    }
    $content_type = $node->bundle();
    // array_splice($suggestions, 1, 0, 'page__node__' . $node->bundle());
    $suggestions[] = 'page__node__'.$content_type;
    if (in_array($content_type, array('webform','page'))) {

      $current_path = Drupal::service('path.current')->getPath();
      $alias = Drupal::service('path.alias_manager')->getAliasByPath($current_path);

      if ($alias != '')  {

        // break up the alias "/about/us"  => "", "about", "" ,"us"
        $parts = explode('/', $alias);

        // we only start suggestion with one "-" because first "/" will become extra "-"
        $suggestion = 'page__alias';

        foreach ($parts as $part) {
            // subsequent suggestions get appended
            $suggestion .= "_" . "$part";
        }

        // turn "-" in "_"
        $suggestion = str_replace("-", "_", $suggestion);
        $suggestions[] = $suggestion;

      }
    }

  }
}

/**
 * Implements hook_theme_suggestions_HOOK_alter().
 */
function umd_terp_theme_suggestions_node_alter(array &$suggestions, array $variables) {
  if ($node = \Drupal::routeMatch()->getParameter('node')) {
    // When viewing a revision $node will be numeric.
    // @see https://www.drupal.org/node/2495703

    if (is_numeric($node)) {
      $node = Node::load($node);
    }
    $content_type = $node->bundle();
    $current_path = Drupal::service('path.current')->getPath();
    $alias = Drupal::service('path.alias_manager')->getAliasByPath($current_path);

    if ($alias != '')  {

      // break up the alias "/about/us"  => "", "about", "" ,"us"
      $parts = explode('/', $alias);
      // we only start suggestion with one "-" because first "/" will become extra "-"
      $suggestion = 'node__alias';
      foreach ($parts as $part) {
          // subsequent suggestions get appended
          $suggestion .= "_" . "$part";
      }
      // turn "-" in "_"
      $suggestion = str_replace("-", "_", $suggestion);
      $suggestions[] = $suggestion;
    }
  }
}

/**
 * Implements hook_theme_suggestions_HOOK_alter().
 */
function umd_terp_theme_suggestions_field_alter(&$suggestions, $variables) {
  // Add ability to adjust fields per view mode
  $suggestions[] = 'field__node__' . $variables['element']['#field_name'] . '__' . $variables['element']['#bundle'] . '__' . $variables['element']['#view_mode'];
}
