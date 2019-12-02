# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_11_26_154457) do

  create_table "logs", force: :cascade do |t|
    t.string "clockin"
    t.string "clockout"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "user_id"
    t.integer "oppurtunity_id"
    t.index ["oppurtunity_id"], name: "index_logs_on_oppurtunity_id"
    t.index ["user_id"], name: "index_logs_on_user_id"
  end

  create_table "oppurtunities", force: :cascade do |t|
    t.string "description"
    t.string "date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "volunteers_needed"
    t.integer "organization_id"
    t.index ["organization_id"], name: "index_oppurtunities_on_organization_id"
  end

  create_table "organizations", force: :cascade do |t|
    t.string "name"
    t.string "password_digest"
    t.string "category"
    t.string "description"
    t.string "site"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "username"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "logs", "oppurtunities"
  add_foreign_key "logs", "users"
  add_foreign_key "oppurtunities", "organizations"
end
