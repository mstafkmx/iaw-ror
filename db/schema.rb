# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20130503123107) do

  create_table "contacts", force: true do |t|
    t.string   "name"
    t.string   "mail"
    t.string   "country"
    t.text     "message"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "names", force: true do |t|
    t.string   "name"
    t.string   "sex"
    t.text     "meaning"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "recomendations", force: true do |t|
    t.string   "namesender"
    t.string   "mailsender"
    t.string   "namereceiver"
    t.string   "mailreceiver"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
