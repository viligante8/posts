angular.module('app')
    .service('PostsSvc', function($http){
        this.fetch = function() {
            return $http.get('/api/posts')
        }

        this.create = function(post) {
            return $http.post('/api/posts', post)
        }

        this.delete = function(id) {
            return $http.delete('/api/posts', { params: { id: id } })
        }
    })
