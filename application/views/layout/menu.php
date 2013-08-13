<header>
	<div class='container'>
		<div id='cabecera'>
			<div class='btn_client'>
				<a class='bg_color_purple' href="">Acceso a clientes</a>
				<a id='access_candidates' class='bg_color_blue2' href="">Acceso a candidatos</a>
			</div>
		</div>
		<div class='three columns'>
			<a href="<?php echo base_url(); ?>"><img id='logo' src="<?php echo base_url();?>img/logo.jpg"></a>
		</div>
		<div class='thirteen columns'>
			<div id='contact'>
				<div id='numbers'>
					<p class='color_blue_light'><span>D.F:</span>1164 9000</p>
					<p class='color_blue_light'><span>Lada:</span>+52 (55) 1164 9000</p>
				</div>
				<div id='chat'>
					<a href=""><div id='chat_icon'></div>Chat LATAM</a>
				</div>
			</div>
			<nav class='navbar'>
				<div class='nav-inner bg_style'>
					<ul class="nav">
					  <li>
						<a href="#">Evaluatest&reg; va conmigo</a>
						<div class='dropdown1 bg_style3'>
							<div class='col1'>
								<a href="<?php echo site_url('va_conmigo/corporativo_negocios');?>">Visión, Misión y Valores</a>
								<a href="">ADN Brivé</a>
								<a href="">Colabora en nuestro Equipo</a>
								<a href="">Convertirse en Socio de Negocios</a>
								<a href="">Cambiando Historias</a>
								<a href="">Responsabilidad Social</a>
							</div>
						</div>
					  </li>
					  <li>
						<a href="<?php echo base_url() ?>mi-rol.php?op=mi-rol">Evaluatest&reg; en mi rol</a>
						<div class='dropdown6 bg_style3'>
							<div class='col3'>
								<a href="<?php echo base_url() ?>views/mi-rol-3.php?op=mi-rol">Ejecutivo de atracción de talento</a>
								<a href="">Ejecutivo de desarrollo organizacional</a>
								<a href="">Gerente de capital humano</a>
								<a href="">Consultas y tercerización</a>
							</div>
							<div class='col4'>
								<a href="">Dirección</a>
								<a href="">Propietario</a>
								<a href="">Tengo un Sistema Instalado</a>
							</div>
						</div>
					  </li>
					  <li>
						<a href="<?php echo base_url() ?>productos.php?op=productos">Productos</a>
						<div class='dropdown2 bg_style3'>
							<div class='col1'>
								<a href="<?php echo base_url() ?>views/productos-3.php?op=productos">Evaluatest&reg; Vívelo</a>
								<a href="">Evaluatest&reg; In side</a>
								<a href="">Evaluatest&reg; Now</a>
								<a href="">Evaluatest&reg; Testing Center</a>
								<a href="">Evaluatest&reg; Api</a>
							</div>
							<div class='col2'>
								<a href="">Evaluatest&reg; Publicación de Vacantes</a>
								<a href="">Estudio Situacional de Competencias</a>
								<a href="">Evaluatest&reg; Desempeño</a>
								<a href="">Evaluatest&reg; Intercambio de Talento</a>
								<a href="">Evaluatest&reg; Encuestas de Salida</a>
							</div>
						</div>
					  </li>
					  <li>
						<a href="<?php echo base_url() ?>consultoria.php?op=consultoria">Consultoría</a>
						<div class='dropdown3 bg_style3'>
							<div class='col1'>
								<a href="<?php echo base_url() ?>views/consultoria-3.php?op=consultoria">Diseño y Desarrollo de Modelo de Competencias</a>
								<a href="">Mapeo a Psicometrías de Modelo de Competencias</a>
								<a href="">Brivé Centro de Competencias</a>
								<a href="">Servicios de Evaluación</a>
							</div>
							<div class='col2'>
								<a href="">Evaluación 360° por Competencias</a>
								<a href="">Estudio Inventario de Talento</a>
								<a href="">Estudio Inventario Fuerza de Ventas</a>
								<a href="">Estudio de Clima y Satisfacción</a>
							</div>
						</div>
					  </li>
					  <li>
						<a href="<?php echo base_url() ?>servicios.php?op=servicios">Servicios</a>
						<div class='dropdown4 bg_style3'>
							<a href="<?php echo base_url() ?>views/servicios-3.php?op=servicios">Servicios de Implementación</a>
							<a href="">Capacitación</a>
							<a href="">Soporte</a>
							<a href="">Consultas y Tercerización</a>
						</div>
					  </li>
					  <li><a href="<?php echo base_url() ?>historias.php?op=historias">Cambiando historias</a></li>
					  <li>
						<a href="<?php echo base_url() ?>comunidad.php?op=comunidad">Comunidad</a>
						<div class='dropdown5 bg_style3'>
							<div class='col1'>
								<a href="<?php echo base_url() ?>views/comunidad-3.php?op=comunidad">White Papers</a>
								<a href="">Circulo Evaluatest&reg;</a>
								<a href="">Soporte</a>
							</div>
							<div class='col2'>
								<a href="">¿Sabías qué?</a>
								<a href="">Redes Sociales</a>
							</div>
						</div>
					  </li>
					</ul>
				</div>
			</nav>
		</div>
	</div>
	<div class='container'>
	<?php if ($home === TRUE){?>
		<h1 class='titleA color_green'>Cuidando el mejor Capital de tu empresa, el Capital Humano</h1>
		<div id='banner'>
			<div id='content_video'>
				<div id='video_banner'>
					<iframe width="300" height="170" src="http://www.youtube.com/embed/qNZpz5PKoTs" frameborder="0" allowfullscreen></iframe>
				</div>
			</div>
		</div>
		<div id='news' class='bg_style'>
			<p>
				<strong class='color_blue'>NOTICIAS: </strong>Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine.
			</p>
		</div>
	<?php } else{?>
		<div id='banner2'>
			<div id='img-banner2'>
				<img src="<?php echo base_url().$urlBanner2;?>">	
			</div>
			<div class='description-banner2 bg_red'>
				<h4><?php echo $tituloH4?></h4>
				<p><?php echo $descripcion ?>
				</p>
				<a class='more-sup' href='#'>más<span class='more-sup-icon'>more</span></a>
			</div>
		</div>
	<?php }?>
	</div>
</header>