/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  // 'GET /': {
  //     controller: 'IndexController',
  //     action: 'inicio'
  //   // view: 'inicio'
  // },
  // 'GET /login': {
  //     controller: 'AuthController',
  //     action: 'login'
  // },
  // 'POST /login': {
  //     controller: 'AuthController',
  //     action: 'process'
  // },
  // 'GET /logout': {
  //     controller: 'AuthController',
  //     action: 'logout'
  // },

  // 'GET /post/:username':{
  //   controller:'PostsController',
  //   action: 'post'
  // },

  // 'GET /post':{
  //   controller:'PostsController',
  //   action: 'findPost'
  // },
  // 'DELETE /deletepost/:id':{
  //   controller:'PostsController',
  //   action: 'deletePost'
  // },


  // 'POST /postadd':{
  //   controller:'PostsController',
  //   action:'postadd'
  // },
  // 'POST /singup':{
  //   controller: 'AuthController',
  //   action: 'registrationuser'
  // },
  // 'GET /singup':{
  //   controller: 'AuthController',
  //   action: 'singup'
  // },
  // 'GET /grupos1':{
  //   controller: 'GruposController',
  //   action: 'findGrupo'
  // },
  // 'GET /finduser':{
  //   controller: 'UsersController',
  //   action: 'findUser'
  // },
  // 'GET /usersocket':{
  //   controller:'UsuariosController',
  //   action:'usersocket'
  // },
  // 'GET /subamigo':{
  //     controller:'PublicacionesController',
  //     action:'subamigo'
  // }
  'GET /public':{
    controller:'PublicController',
    action:'public'
  },
  'GET /subfriend':{

    controller:'PublicController',
    action:'subfriend'

  },
  'GET /crearpost':{
    controller:'PublicController',
    action:'crearpost'
  },
  'GET /getpost':{
    controller:'PublicController',
    action:'getpost'
  }
  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
