<!DOCTYPE html>
<html lang='es'>
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<title><?php echo $this->ViewBag['layout_title'];?></title>
	<link rel="stylesheet" href="<?php echo base_url();?>css/normalize.css" />
	<link rel="stylesheet" href="<?php echo base_url();?>css/skeleton.css" />
	<link rel="stylesheet" type="text/css" href="<?php echo base_url();?>css/estilo.css" />
	<link rel="stylesheet" type="text/css" href="<?php echo base_url();?>css/base.css" />
	<link rel="stylesheet" type="text/css" media="all" href="<?php echo base_url();?>css/social.css" />
	<script type="text/javascript" src="<?php echo base_url();?>js/html5shiv.js"></script>
</head>
<body>
	<div class='container clearfix'>
		<ul id='menu-top'>
			<li><a href="">Inicio</a></li>
			<li><a href="">Contacto</a></li>
			<li><a href="">Centro de Solución a Clientes</a></li>
			<li><a href="">Buzón</a></li>
			<li><a href="">Latinoamerica</a></li>
		</ul>
	</div>
	<div id="wrapper">
		<a href="<?php echo base_url();?>blog/" target="_blank" class="micrositio"></a>
		<?php echo $this->load->view("layout/menu");?>
		<section>
		<?php echo $this->load->view($content);?> 
		</section>
		<?php echo $this->load->view('layout/footer');?>
	</div>
	<div id="social-tabs"></div>
	<script src="<?php echo base_url();?>js/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="<?php echo base_url();?>js/funciones.js"></script>
	<script type="text/javascript" src="<?php echo base_url();?>js/jquery.wd.social.js"></script>
	<script type="text/javascript">
		jQuery(document).ready(function ($) {
			if (!jQuery().dcSocialTabs) {
				$.getScript("jquery.social.media.tabs.1.3.js", function () {})
			}
			$("#social-tabs").dcSocialTabs({
				widgets: 'twitter,facebook,fblike,fbrec,youtube',
				twitterId: "@TurismoRuralCam",
				facebookId: "260428054040709",
				fblikeId: "260428054040709",
				fbrecId: "http://turismoruralcampeche.com",
				youtubeId: "TurismoRuralCamp",
				twitter: {
					title: "Últimos Tweets",
					follow: "Síguenos en Twitter",
					limit: "10",
					thumb: true
				},
				facebook: {
					title: "Muro de Facebook",
					follow: "Síguenos en Facebook",
					limit: "10"
				},
				fblike: {
					limit: "30",
					stream: "false",
					header: "true"
				},
				fbrec: {
					header: "true"
				},
				youtube: {
					limit: "10",
					feed: "uploads"
				},
				method: "slide",
				position: "fixed",
				height: 555,
				location: "right",
				align: "top",
				offset: 40,
				speed: 600,
				rotate: {
					delay: 6000,
					direction: ""
				},
				wrapper: "dcsmt",
				content: "dcsmt-content",
				slider: "dcsmt-slider",
				classOpen: "dcsnt-open",
				classClose: "dcsnt-close",
				classToggle: "dcsnt-toggle",
				classSlide: "dcsnt-slide",
				imagePath: "<?php echo base_url();?>img/imagenes_social/"
			})
		});

	</script>
</body>
</html>