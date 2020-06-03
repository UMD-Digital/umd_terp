/**
 * Modules
 */

import "bootstrap/js/dist/collapse";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/modal";
import "bootstrap/js/dist/tab";
import "bootstrap/js/dist/alert";
import focusWithin from "focus-within";
import * as objectFitImages from 'object-fit-images';

import initSlideshows from "../components/slideshow/slideshow";
import initCards from "../components/card/card";
import initCarousels from "../components/carousel/carousel";
import initStatGroups from "../components/stat-group/stat-group";
import initSubnav from "../components/subnav/subnav";
import Tablesaw from "../components/table/table";

/**
 * Init
 */
focusWithin(document);
objectFitImages();
initSlideshows();
initCards();
initCarousels();
initStatGroups();
initSubnav();
Tablesaw.init();