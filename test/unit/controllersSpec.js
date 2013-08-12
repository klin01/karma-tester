'use strict';

/* jasmine specs for controllers go here */
describe('Blog controllers', function() {

  beforeEach(function(){
    module('blogApp');

    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });


  //beforeEach(module('phonecatServices'));


  describe('BlogController', function(){
    var scope, controller, createController;//, $httpBackend;

    beforeEach(inject(function($injector) { //function(_$httpBackend_, $rootScope, $controller) {
      //$httpBackend = _$httpBackend_;
      // $httpBackend.expectGET('phones/phones.json').
      //     respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

      scope = $injector.get('$rootScope');
      controller = $injector.get('$controller');
      createController = function() {
        return controller('BlogController', {$scope: scope});
      };
    }));


    it('should initialize a text property to the scope', function() {
      var blogController = createController();
      expect(scope.text).not.toBe(undefined);
      //$httpBackend.flush();

      // expect(scope.phones).toEqualData(
      //     [{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
    });


    // it('should set the default value of orderProp model', function() {
    //   expect(scope.orderProp).toBe('age');
    // });
  });


//   describe('PhoneDetailCtrl', function(){
//     var scope, $httpBackend, ctrl,
//         xyzPhoneData = function() {
//           return {
//             name: 'phone xyz',
//                 images: ['image/url1.png', 'image/url2.png']
//           }
//         };


//     beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
//       $httpBackend = _$httpBackend_;
//       $httpBackend.expectGET('phones/xyz.json').respond(xyzPhoneData());

//       $routeParams.phoneId = 'xyz';
//       scope = $rootScope.$new();
//       ctrl = $controller(PhoneDetailCtrl, {$scope: scope});
//     }));


//     it('should fetch phone detail', function() {
//       expect(scope.phone).toEqualData({});
//       $httpBackend.flush();

//       expect(scope.phone).toEqualData(xyzPhoneData());
//     });
//   });
});
