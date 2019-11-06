/**
 * Modules
 */

import "bootstrap/js/dist/collapse";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/modal";
import "bootstrap/js/dist/tab";
import "bootstrap/js/dist/alert";
import focusWithin from "focus-within";

import initSlideshows from "../components/slideshow/slideshow";
import initCards from "../components/card/card";
import initCardGroups from "../components/card-group/card-group";
import initCarousels from "../components/carousel/carousel";
import initStatGroups from "../components/stat-group/stat-group";
import Tablesaw from "../components/table/table";

/**
 * Init
 */
focusWithin(document);
initSlideshows();
initCards();
initCardGroups();
initCarousels();
initStatGroups();
Tablesaw.init();