class TestsController < ApplicationController

	def index
		@book = Book.find(1)
		puts "TEST CONROLLER !!@@@!!!@!@@!@@!@!@!@!@!@!@!@@@!!!!!!!!!!!!!!!!"
	end
end
