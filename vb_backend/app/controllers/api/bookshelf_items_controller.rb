class Api::Bookshelf_Items_Controller < ApplicationController

  def create
    @user = current_user

    @books = User.books
  end

  def update
    @user = current_user

    Bookshelf_Item.find_by(user_id: @user.id, book_id: params[:book_id])
  end
end
