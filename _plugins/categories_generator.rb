module Jekyll

  class CategoryPageGenerator < Generator

    safe true

    def generate(site)

      site.categories.each do |category, posts|

        site.pages << CategoryPage.new(
          site,
          category
        )

      end

    end

  end


  class CategoryPage < Page

    def initialize(site, category)

      @site = site
      @base = site.source
      @dir = "categories/#{category}"

      self.read_yaml(
        File.join(@base, "_layouts"),
        "category.html"
      )

      self.data["category"] = category
      self.data["title"] = category

    end

  end

end
