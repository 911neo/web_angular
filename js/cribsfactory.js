angular.module('ng-cribs')
            .factory('cribsfactory' , function ($http) {



            function getcribs() {
              return $http.get('data/data.json');

              
            }

               return {

                 getcribs : getcribs
               }



            });
