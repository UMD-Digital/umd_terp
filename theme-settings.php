<?php

/**
 * @file
 * UMD Terp (umd_terp), add custom theme settings options here.
 */

use Drupal\Core\Form\FormStateInterface;

/**
 * Implements hook_form_system_theme_settings_alter().
 */
function umd_terp_form_system_theme_settings_alter(&$form, FormStateInterface $form_state) {

  // Header.
  $form['umd_terp_header_settings'] = [
    '#type' => 'details',
    '#title' => t('UMD Terp Header Settings'),
  ];
  $form['umd_terp_header_settings']['umd_terp_header_light'] = [
    '#type' => 'checkbox',
    '#title' => t('Light header style'),
    '#description' => t('Display light header version.'),
    '#default_value' => theme_get_setting('umd_terp_header_light'),
  ];

  // Footer.
  $form['umd_terp_footer_settings'] = [
    '#type' => 'details',
    '#title' => t('UMD Terp Footer Settings'),
  ];
  $form['umd_terp_footer_settings']['umd_terp_address'] = [
    '#type' => 'textfield',
    '#title' => t('Address'),
    '#default_value' => theme_get_setting('umd_terp_address'),
    '#description' => t('Please add the address you wish to display.'),
  ];
  $form['umd_terp_footer_settings']['umd_terp_phone'] = [
    '#type' => 'textfield',
    '#title' => t('Phone Number'),
    '#default_value' => theme_get_setting('umd_terp_phone'),
    '#description' => t('Please add the phone number you wish to display.'),
  ];
  $form['umd_terp_footer_settings']['umd_terp_email'] = [
    '#type' => 'textfield',
    '#title' => t('Email'),
    '#default_value' => theme_get_setting('umd_terp_email'),
    '#description' => t('Please add the email address you wish to display.'),
  ];

  // Social media.
  $form['umd_terp_social_settings'] = [
    '#type' => 'details',
    '#title' => t('UMD Terp Social Media Accounts'),
  ];
  $form['umd_terp_social_settings']['umd_terp_twitter_link'] = [
    '#type' => 'textfield',
    '#title' => t('Twitter Link'),
    '#default_value' => theme_get_setting('umd_terp_twitter_link'),
    '#description' => t('Add the URL to your twitter profile.'),
  ];
  $form['umd_terp_social_settings']['umd_terp_facebook_link'] = [
    '#type' => 'textfield',
    '#title' => t('Facebook Link'),
    '#default_value' => theme_get_setting('umd_terp_facebook_link'),
    '#description' => t('Add the URL to your facebook profile.'),
  ];
  $form['umd_terp_social_settings']['umd_terp_youtube_link'] = [
    '#type' => 'textfield',
    '#title' => t('Youtube Link'),
    '#default_value' => theme_get_setting('umd_terp_youtube_link'),
    '#description' => t('Add the URL to your youtube profile.'),
  ];
  $form['umd_terp_social_settings']['umd_terp_instagram_link'] = [
    '#type' => 'textfield',
    '#title' => t('Instagram Link'),
    '#default_value' => theme_get_setting('umd_terp_instagram_link'),
    '#description' => t('Add the URL to your instagram profile.'),
  ];
  $form['umd_terp_social_settings']['umd_terp_linkedin_link'] = [
    '#type' => 'textfield',
    '#title' => t('Linkedin Link'),
    '#default_value' => theme_get_setting('umd_terp_linkedin_link'),
    '#description' => t('Add the URL to your linkedin profile.'),
  ];

  // Other.
  $form['other'] = [
    '#type' => 'details',
    '#title' => t('UMD Terp Admin Settings'),
    '#collapsible' => TRUE,
  ];

  $form['other']['umd_terp_assets_path'] = [
    '#type' => 'textfield',
    '#title' => t('Assets path'),
    '#description' => t('Provides a site wide {{ assets_path }} variable for the builds assets path relative to the theme root. Usable in twig templates. Ex: /static/build'),
    '#default_value' => theme_get_setting('umd_terp_assets_path'),
  ];
}
