angular.module("testApp.controllers", [])

    .controller("AppCtrl", function ($scope, $ionicModal, $timeout) {
        $ionicModal.fromTemplateUrl("templates/personalCenterEdit.html", {
            scope: $scope,
            controller: "PersonalCenterEditCtrl",
            animation: "slide-in-up"
        }).then(function (modal) {
            $scope.modal = modal;
        });

        $scope.personalCenterEdit = function () {
            // 显示设置pcCircle的宽高(personalcenter.html)
            $scope.modal.show();
            var pcEditCircle = document.getElementById("pcEditCircle");
            var pcEditCircle_min = Math.min(document.documentElement.clientWidth, document.documentElement.clientHeight);
            pcEditCircle.style.width = pcEditCircle_min + "px";
            pcEditCircle.style.height = pcEditCircle_min*0.4 + "px";

            console.log(pcEditCircle.style.width);
            console.log(pcEditCircle.style.height);
        };

    })

    .controller("PlaylistsCtrl", function ($scope) {
        $scope.playlists = [
            { title: "Reggae", id: 1 },
            { title: "Chill", id: 2 },
            { title: "Dubstep", id: 3 },
            { title: "Indie", id: 4 },
            { title: "Rap", id: 5 },
            { title: "Cowbell", id: 6 }
        ];
    })

    .controller("PlaylistCtrl", function ($scope, $stateParams) {

    })

    .controller("PersonalCenterCtrl", function ($scope) {
        // 显示设置pcCircle的宽高(personalcenter.html)
        var pcCircle = document.getElementById("pcCircle");
        var pcCircle_min = Math.min(document.documentElement.clientWidth, document.documentElement.clientHeight);
        pcCircle.style.width = pcCircle_min*0.3 + "px";
        pcCircle.style.height = pcCircle_min*0.3 + "px";

        console.log(pcCircle.style.width);
        console.log(pcCircle.style.height);
    })

    .controller("PersonalCenterEditCtrl", function ($scope) {
        alert("hello");
    });
