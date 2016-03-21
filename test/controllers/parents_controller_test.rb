require 'test_helper'

class ParentsControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get oceny" do
    get :oceny
    assert_response :success
  end

  test "should get statystyki" do
    get :statystyki
    assert_response :success
  end

  test "should get profil" do
    get :profil
    assert_response :success
  end

  test "should get poczta" do
    get :poczta
    assert_response :success
  end

end
