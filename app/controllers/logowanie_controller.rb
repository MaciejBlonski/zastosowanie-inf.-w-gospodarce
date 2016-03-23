class LogowanieController < ApplicationController
  def index

    logowanie=params[:zaloguj]
    if logowanie=='zaloguj'
      render 'teacher/Index'
    elsif logowanie=='Opiekun'
      render 'parents/index'
    elsif logowanie=='Uczeń'
      #render 'uczen/index'
    end
  end
end
