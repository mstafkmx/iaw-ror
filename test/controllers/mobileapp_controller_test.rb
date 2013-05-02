require 'test_helper'

class MobileappControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

end
