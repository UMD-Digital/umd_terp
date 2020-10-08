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
  $form['umd_terp_footer_settings']['umd_terp_footer_logo_path'] = [
    '#type' => 'textfield',
    '#title' => t('Path to custom footer logo'),
    '#default_value' => theme_get_setting('umd_terp_footer_logo_path'),
  ];
  $form['umd_terp_footer_settings']['umd_terp_footer_logo_upload'] = [
    '#type' => 'file',
    '#title' => t('Upload footer logo image'),
    '#maxlength' => 40,
    '#description' => t('Please upload the footer-specific logo. This should be a "dark" version of the logo that features black typography.'),
  ];
  $form['umd_terp_footer_settings']['umd_terp_address'] = [
    '#type' => 'textfield',
    '#title' => t('Address'),
    '#default_value' => theme_get_setting('umd_terp_address'),
    '#description' => t('Please add the address you wish to display.'),
  ];
  $form['umd_terp_footer_settings']['umd_terp_phone'] = [
    '#type' => 'textfield',
    '#title' => t('Phone number'),
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
    '#title' => t('Twitter link'),
    '#default_value' => theme_get_setting('umd_terp_twitter_link'),
    '#description' => t('Add the URL to your twitter profile.'),
  ];
  $form['umd_terp_social_settings']['umd_terp_facebook_link'] = [
    '#type' => 'textfield',
    '#title' => t('Facebook link'),
    '#default_value' => theme_get_setting('umd_terp_facebook_link'),
    '#description' => t('Add the URL to your facebook profile.'),
  ];
  $form['umd_terp_social_settings']['umd_terp_youtube_link'] = [
    '#type' => 'textfield',
    '#title' => t('Youtube link'),
    '#default_value' => theme_get_setting('umd_terp_youtube_link'),
    '#description' => t('Add the URL to your youtube profile.'),
  ];
  $form['umd_terp_social_settings']['umd_terp_instagram_link'] = [
    '#type' => 'textfield',
    '#title' => t('Instagram link'),
    '#default_value' => theme_get_setting('umd_terp_instagram_link'),
    '#description' => t('Add the URL to your instagram profile.'),
  ];

  // Articles.
  $form['articles'] = [
    '#type' => 'details',
    '#title' => t('Local Articles Settings'),
    '#collapsible' => TRUE,
  ];

  $help_markup = "<p>These settings are for if you wish to change the default articles URL from '/articles' to something else. Be sure you also change the corresponding pathauto pattern for Articles.</p>";
  $form['articles']['articles_help'] = [
    '#type' => 'markup',
    '#markup' => $help_markup,
  ];

  $form['articles']['umd_terp_articles_path'] = [
    '#type' => 'textfield',
    '#title' => t('Back to directory path'),
    '#description' => t('Provides a site wide {{ umd_terp_articles_path }} variable for profile templates. Specifically, it is used for categorizing articles, and linking back to a pre-filtered page. Ex: /news. Defaults to "/articles".'),
    '#default_value' => theme_get_setting('umd_terp_articles_path'),
  ];

  // People.
  $form['people'] = [
    '#type' => 'details',
    '#title' => t('Local People Settings'),
    '#collapsible' => TRUE,
  ];

  $form['people']['umd_terp_people_department_label'] = [
    '#type' => 'textfield',
    '#title' => t('Department Label'),
    '#description' => t('Provides a method for changing the default \'Department Information\' label to another value'),
    '#default_value' => theme_get_setting('umd_terp_people_department_label', 'Department Information'),
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

  $form['other']['umd_terp_disable_dark_mode_options'] = [
    '#type' => 'checkbox',
    '#title' => t('Disable dark mode options'),
    '#description' => t('Remove dark mode related options.'),
    '#default_value' => theme_get_setting('umd_terp_disable_dark_mode_options'),
  ];

  $form['#validate'][] = 'umd_terp_form_system_theme_settings_validate_test';
  $form['#submit'][] = 'umd_terp_form_system_theme_settings_submit';
}

/**
 * Custom file upload validator.
 */
function umd_terp_form_system_theme_settings_validate_test($form, FormStateInterface &$form_state) {
  // Handle file uploads.
  $validators = [
    'file_validate_is_image' => [],
  ];
  // Check for a new uploaded logo.
  $file = file_save_upload('umd_terp_footer_logo_upload', $validators, FALSE, 0);
  if (isset($file)) {
    if ($file) {
      $form_state->setValue('umd_terp_footer_logo_upload', $file);
    }
    else {
      $form_state->setErrorByName('umd_terp_footer_logo_upload', t('The footer logo could not be uploaded.'));
    }
  }
}

/**
 * Custom submit handler.
 */
function umd_terp_form_system_theme_settings_submit(&$form, FormStateInterface $form_state) {
  $values = $form_state->getValues();
  if (!empty($values['umd_terp_footer_logo_upload'])) {
    $filename = file_unmanaged_copy($values['umd_terp_footer_logo_upload']->getFileUri());
    $values['umd_terp_footer_logo_path'] = $filename;
    $form_state->setValue(['umd_terp_footer_logo_path'], $filename);
    $form_state->unsetValue('umd_terp_footer_logo_upload');
  }
}
