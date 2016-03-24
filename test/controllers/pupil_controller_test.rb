require 'test_helper'

class PupilControllerTest < ActionController::TestCase
  test "should get profil" do
    get :profil
    assert_response :success
  end

  test "should get zadania" do
    get :zadania
    assert_response :success
  end

  test "should get osiagniecia" do
    get :osiagniecia
    assert_response :success
  end

  test "should get wiadomosc" do
    get :wiadomosc
    assert_response :success
  end

  test "should get oceny" do
    get :oceny
    assert_response :success
  end

end
