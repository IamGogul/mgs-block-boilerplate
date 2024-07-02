/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

export default function initBlock( $block ) {

    if( !$block ) {
        return;
    }

    const { name, settings, metadata } = $block;
    return registerBlockType( { name, ...metadata }, settings );
}