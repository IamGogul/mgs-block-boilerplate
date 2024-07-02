<?php
/**
 * MGS Block Boilerplate
 *
 *
 * Plugin Name: MGS Block Boilerplate
 * Description: Boilerplate for creating wordpress block.
 * Version: 0.1.0
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Author: 🎖️ M Gogul Saravanan
 * Author URI: https://profiles.wordpress.org/iamgogul/
 * License:     GPL-2.0-or-later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: mgs-block-boilerplate
 * Domain Path: /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 */
function mgs_blocks_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'mgs_blocks_init' );
