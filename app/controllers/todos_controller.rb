# frozen_string_literal: true

class TodosController < ApplicationController
  layout 'todos'

  def index
    @todos_props = {
      todos: [{
        title: 'Call Mum',
        description: 'Call Mum and ask her about the fligths',
        deadline: Date.new(2018, 4, 1)
      }]
    }
  end
end
