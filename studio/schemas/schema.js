// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Import user defined schema types
import config from './config.js';
import menu from './menu.js';
import social from './social.js';
import footer from './footer.js';
import home from './home.js';
import page from './page.js';
import post from './post.js';
import elements from './elements.js';
import intro from './intro.js';
import features from './features.js';
import spotlight from './spotlight.js';
import mission from './mission.js';
import action from './action.js';
import site_menus from './site_menus.js';
import site_menu_item from './site_menu_item.js';
import page_menus from './page_menus.js';
import page_menu_item from './page_menu_item.js';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    config,
    menu,
    social,
    footer,
    home,
    page,
    post,
    elements,
    intro,
    features,
    spotlight,
    mission,
    action,
    site_menus,
    site_menu_item,
    page_menus,
    page_menu_item
    ])
})
