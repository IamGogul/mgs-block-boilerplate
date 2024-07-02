<?php
/**
 * Server-side rendering of the `mgs-blocks/simple-block` block.
 *
 */

$wrapper_attributes = get_block_wrapper_attributes([
    'class' => 'mgs-extra-class'
]);
?>
<p <?php echo $wrapper_attributes;?>>
    <?php esc_html_e( 'This is Frontend View', 'mgs-block-boilerplate' ); ?>
</p>