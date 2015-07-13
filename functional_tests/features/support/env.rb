require 'rspec/expectations'
require 'capybara'
require 'capybara/mechanize'
require 'capybara/cucumber'
require 'capybara/poltergeist'
require 'capybara/selenium/driver'

require 'selenium-webdriver'
require 'net/http'

require 'phantomjs'

Capybara.configure do |config|
  config.run_server = false
  config.default_driver = :selenium
  config.app_host = 'http://localhost:3000' # change url
end
