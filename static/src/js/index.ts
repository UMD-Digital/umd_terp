/**
 * Modules
 */

import "bootstrap/js/dist/collapse";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/modal";
import "bootstrap/js/dist/tab";
import "bootstrap/js/dist/alert";
import focusWithin from "focus-within";
import * as objectFitImages from "object-fit-images";

import initSlideshows from "../components/slideshow/slideshow";
import initCards from "../components/card/card";
import initCarousels from "../components/carousel/carousel";
import initStatGroups from "../components/stat-group/stat-group";
import initSubnav from "../components/subnav/subnav";
import initBackToTop from "../components/back-to-top/back-to-top";
import Tablesaw from "../components/table/table";
import initSiteHeader from "../components/site-header/site-header";

/**
 * Init
 */
focusWithin(document);
objectFitImages();
initSiteHeader();
initSlideshows();
initCards();
initCarousels();
initStatGroups();
initSubnav();
initBackToTop();
Tablesaw.init();