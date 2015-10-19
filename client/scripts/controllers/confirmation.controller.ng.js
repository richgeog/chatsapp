angular
  .module('Chatsapp')
  .controller('ConfirmationCtrl', ConfirmationCtrl);

function ConfirmationCtrl($scope, $state, $ionicPopup, $log) {
  $scope.phone = $state.parans.phone;
  $scope.data = {};
  $scope.verify = verify;

  function verify() {
    if (_.isEmpty($scope.data.code)) {
      return;
    }

    Accounts.verifyPhone($scope.phone, $scope.data.code, function (err) {
        if (err) {
          return handleError(err);
        }

        $state.go('profile');
    });
  }

  function handleError(err) {
    $log.error('Verification error', err);

    $ionicPopup.alert({
      title: err.reason || 'Verification failed',
      template: 'Please try again',
      okType: 'button-positive button-clear'
    });
  }
}