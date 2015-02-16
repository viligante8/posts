angular.module('app')
    .controller('PostsCtrl', function ($scope, PostsSvc) {
        PostsSvc.fetch().success(function (posts) {
            $scope.posts = posts
        })

        $scope.addPost = function () {
            if ($scope.postBody) {
                var newPost = {
                    userName: '@viligante8',
                    body: $scope.postBody
                }

                PostsSvc.create(newPost)
                    .success(function (post) {
                        $scope.posts.unshift(post)
                        $scope.postBody = null
                    })
            }
        }

        $scope.deletePost = function (post) {
            PostsSvc.delete(post._id).success(function () {
                var index = $scope.posts.indexOf(post)
                $scope.posts.splice(index, 1);
            })
        }
    })
