Given(/^I'm on the homepage$/) do
    visit('/')
end

Then(/^I see "([^"]*)"$/) do |expected_text|
  expect(page).to have_content(expected_text)
end
