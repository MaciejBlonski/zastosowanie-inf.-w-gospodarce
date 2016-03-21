require 'test_helper'

class TeacherControllerTest < ActionController::TestCase
  test "should get Index" do
    get :Index
    assert_response :success
  end

  test "should get dodaj" do
    get :dodaj
    assert_response :success
  end

  test "should get oceny" do
    get :oceny
    assert_response :success
  end

  test "should get poczta" do
    get :poczta
    assert_response :success
  end

  test "should get profil" do
    get :profil
    assert_response :success
  end

  test "should get statystyki" do
    get :statystyki
    assert_response :success
  end

  test "should get organizacjia" do
    get :organizacjia
    assert_response :success
  end

end
