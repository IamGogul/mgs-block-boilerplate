/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import initBlock from "./utils/init-block";
import MyBlockEdit from './edit';
import MyBlockSave from './save';

import metadata from "./block.json";
import { blockIcon as icon } from './icons/block-icon';


const { name, textdomain } = metadata;
export { metadata, name };

export const settings = {
    icon,
    description: __( 'Here you can add short description about the block.', textdomain ),
    edit: MyBlockEdit,
    save: MyBlockSave
};

initBlock({ name, metadata, settings });