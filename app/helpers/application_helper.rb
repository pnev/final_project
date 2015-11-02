module ApplicationHelper

  def markdown(content)
      renderer = Redcarpet::Render::HTML.new(hard_wrap:true)
      options = {
        autolink:true,
        filter_html:true
      }
      Redcarpet::Markdown.new(renderer,options).render(content).html_safe
    end
    
end
