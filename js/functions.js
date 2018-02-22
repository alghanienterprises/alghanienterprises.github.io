jQuery('html').removeClass('no-js').addClass('js');if(navigator.appVersion.indexOf("Mac")!=-1)
jQuery('html').addClass('osx');jQuery(document).ready(function($){(function(){$(window).load(function(){$('a[rel=external]').attr('target','_blank');});})();(function(){$('body').tooltip({delay:{show:300,hide:0},selector:'[data-toggle=tooltip]:not([disabled])'});})();(function(){var $mainNav=$('.navbar .nav'),responsiveNav='';$mainNav.find('li').each(function(){var $this=$(this),$link=$this.children('a'),depth=$this.parents('ul').length-1,indent='';if(depth){while(depth>0){indent+=' - ';depth--;}}
if($link.text())
responsiveNav+='<option '+($this.hasClass('active')?'selected="selected"':'')+' value="'+$link.attr('href')+'">'+indent+' '+$link.text()+'</option>';}).end().after('<select class="nav-responsive">'+responsiveNav+'</select>');$('.nav-responsive').on('change',function(){window.location=$(this).val();});})();(function(){$(window).load(function(){var $container=$('#portfolio-items');function filter_projects(tag)
{$container.isotope({filter:tag});$('li.active').removeClass('active');$('#portfolio-filter').find("[data-filter='"+tag+"']").parent().addClass('active');if(tag!='*')
window.location.hash=tag.replace('.','');if(tag=='*')
window.location.hash='';}
if($container.length){$('.project').each(function(){$this=$(this);var tags=$this.data('tags');if(tags){var classes=tags.split(',');for(var i=classes.length-1;i>=0;i--){$this.addClass(classes[i]);};}})
$container.isotope({itemSelector:'.project',layoutMode:'fitRows'});$('#portfolio-filter li a').click(function(){var selector=$(this).attr('data-filter');filter_projects(selector);return false;});if(window.location.hash!='')
{filter_projects('.'+window.location.hash.replace('#',''));}}})})();$('#send').click(function(){$('.error').fadeOut('slow');var error=false;var name=$('input#name').val();if(name==""||name==" "||name=="Name"){$('#err-name').fadeIn('slow');error=true;}
var email_compare=/^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$/;var email=$('input#email').val();if(email==""||email==" "||email=="E-mail"){$('#err-email').fadeIn('slow');error=true;}else if(!email_compare.test(email)){$('#err-emailvld').fadeIn('slow');error=true;}
var message=$('textarea#message').val();if(message==""||message==" "||message=="Message"){$('#err-message').fadeIn('slow');error=true;}
if(error==true){$('#err-form').slideDown('slow');return false;}
var data_string=$('#ajax-form').serialize();$.ajax({type:"POST",url:$('#ajax-form').attr('action'),data:data_string,timeout:6000,error:function(request,error){if(error=="timeout"){$('#err-timedout').slideDown('slow');}
else{$('#err-state').slideDown('slow');$("#err-state").html('An error occurred: '+error+'');}},success:function(){$('#ajaxsuccess').slideDown('slow');$('#ajaxsuccess').delay(4000);$('#ajaxsuccess').fadeOut(1000);$("#name").val('');$("#email").val('');$("#message").val('');}});return false;});$(window).load(function(){$('.slider1').flexslider({animation:"slide",start:function(slider){$('body').removeClass('loading');},});$('.slider2').flexslider({animation:"slide",slideshow:false,animationLoop:false});});});(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create','UA-10146041-21','auto');ga('send','pageview');
