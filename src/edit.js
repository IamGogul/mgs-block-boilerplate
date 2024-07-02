/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import metadata from "./block.json";

const { textdomain } = metadata;

/**
 * The edit function describes the structure of your block in the context of the editor.
 * This represents what the editor will render when the block is used.
 */
const MyBlockEdit = ( { attributes, setAttributes, isSelected } ) => {

    const blockProps = useBlockProps({
        className: 'my-editor-class'
    });

    return (
        <>
            <p { ...blockProps }>
                { __('This is Editor Content', textdomain ) }
            </p>
        </>
    );
};

export default MyBlockEdit;