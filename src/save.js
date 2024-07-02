/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 */
const MyBlockSave = ( { attributes } ) => {

    return (
        <h1 { ...useBlockProps.save() }>This is How it is saved in Post Content</h1>
    );
};

export default MyBlockSave;