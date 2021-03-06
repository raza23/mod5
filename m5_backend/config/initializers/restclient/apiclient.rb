# require 'rest-client'
# require 'indico'
# require 'rails/configuration'


#     url = "https://projects.propublica.org/nonprofits/api/v2/search.json?"
#     data = JSON.parse(RestClient.get(url))

#     data["orgs"].each do |organization, index|
#         org = Organization.find_by(name: organization["name"])
#         if !org
#             config = {api_key: "#{ENV["INDICO_API_KEY"]}"}

    
    
#     ## maximum page count is 100, iterating through will still only provide 10000/1863727 total orgs, 
#         # so can't retrieve entire database at once
    
    

#     def self.retrieve_orgs_from_pages_of_api_search(url, page_limit)
#         page_count = [self.api_query_hash(url)['num_pages'], page_limit].min

#         org_list = []
#         for i in (0...page_count)
#             self.api_query_hash("#{url}&page=#{i}")['organizations'].each {|org| org_list.push(org)}
#         end

#         org_list.each do |org| 
#             if not Organization.find_by(username: org['ein'])
#                 Organization.create(name: org['name'], state: org['state'], city: org['city'], username: org['ein'], password: 'password')
#             end
#         end
#     end
    
#     # no-parameter search
#     def self.default_retrieve(page_limit = 100)
#         self.retrieve_orgs_from_pages_of_api_search(self.api_index_url, page_limit)
#     end

#     def self.location_search_retrieve(city, state, page_limit = 100)
#         search_url = "#{self.api_index_url}q=#{city}&state[id]=#{state}"

#         self.retrieve_orgs_from_pages_of_api_search(search_url, page_limit)
#     end
# end