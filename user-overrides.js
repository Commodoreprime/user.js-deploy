/***** USER-OVERRIDES.js START *****/

/* SECTION 1 ************************/
/***                              ***/
/**** Arkenfox user.js overrides ****/
/***                              ***/
/************************************/
user_pref("_user.js.parrot", "Syntax error @ section 1 in user-overrides.js");

user_pref("browser.safebrowsing.downloads.remote.enabled", true); // 0403
user_pref("dom.security.https_only_mode_send_http_background_request", true); // 1246
user_pref("gfx.font_rendering.opentype_svg.enabled", true); // 1401
user_pref("browser.eme.ui.enabled", true); // 2022
user_pref("pdfjs.disabled", false); // 2620
user_pref("privacy.clearOnShutdown.cookies", false); // 2811
user_pref("signon.rememberSignons", false); // 5003
user_pref("permissions.memory_only", true); // 5004


/* SECTION 2 *********************************************/
/***                                                   ***/
/**** Override recipe: Enable session restore         ****/
/**** https://github.com/arkenfox/user.js/issues/1080 ****/
/***                                                   ***/
/*********************************************************/
user_pref("_user.js.parrot", "Syntax error @ section 2 in user-overrides.js");

user_pref("browser.startup.page", 3); // 0102
user_pref("browser.sessionstore.privacy_level", 0); // 1003
user_pref("privacy.clearOnShutdown.history", false); // 2811


/* SECTION 3 *********************************************/
/***                                                   ***/
/**** Override recipe: Enable DRM                     ****/
/**** https://github.com/arkenfox/user.js/issues/1080 ****/
/***                                                   ***/
/*********************************************************/
user_pref("_user.js.parrot", "Syntax error @ section 3 in user-overrides.js");

user_pref("media.eme.enabled", true); // 2022


/* SECTION 4 ********************/
/***                          ***/
/**** Misc. profile settings ****/
/**** from multiple sources  ****/
/***                          ***/
/********************************/
user_pref("_user.js.parrot", "Syntax error @ section 4 in user-overrides.js");

/* Enable "compact" density mode and set to said mode[1] */
user_pref("browser.compactmode.show", true);
user_pref("browser.uidensity", 1);

/* Set default theme to compact dark */
user_pref("extensions.activeThemeID", "firefox-compact-dark@mozilla.org");

/* Allows CSS to stylize the scrollbar width and color[2] */
user_pref("layout.css.scrollbar-width.enabled", true);
user_pref("layout.css.scrollbar-color.enabled", true);

/* Triple clicking a paragraph will select the whole paragraph[2] */
user_pref("browser.triple_click_selects_paragraph", true);

/* Enable custom chrome/userChrome.css settings to be loaded[4]
 * Refer to: https://github.com/piroor/treestyletab/wiki/Code-snippets-for-custom-style-rules#for-userchromecss
 *    for recipes and ideas.
 */
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

/* Moves the sidebar to the right side of the window */
user_pref("sidebar.position_start", false);

/* Don't close the browser when the last tab is closed[2] */
user_pref("browser.tabs.closeWindowWithLastTab", false);

/* Shows 'View Image Info' item in the image context menu[2] */
user_pref("browser.menu.showViewImageInfo", true);

/* Set developer tools to be a pop-out window */
user_pref("devtools.toolbox.host", "window");

/* Sources:
 * [1] https://searchfox.org/mozilla-central/source/browser/app/profile/firefox.js
 * [2] https://codeberg.org/12bytes.org/firefox-user.js-supplement/src/branch/master/user-overrides.js
 * [4] https://web.archive.org/web/20201111201828/https://developer.mozilla.org/en-US/docs/Archive/Mozilla/XUL/Tutorial/Modifying_the_Default_Skin
 */

/***** USER-OVERRIDES.js FINISH *****/
user_pref("_user.js.parrot", "SUCCESS: user-overrides.js has loaded!");
