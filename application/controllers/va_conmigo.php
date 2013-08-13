<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class va_conmigo extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -  
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in 
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see http://codeigniter.com/user_guide/general/urls.html
	 */
	function vision_mision_valores()
	{
		$this->ViewBag['layout_title'] = "Visión, Misión y Valores";
		$datos['home'] = false;
		$datos['urlBanner2'] = 'img/va-conmigo.png';
		$datos['tituloH4'] = 'Evaluatest va conmigo en la alineación de mi talento';
		$datos['descripcion'] =  'Diagnostica el Talento y agiliza tus procesos de Atracción y Desarrollo, encuentra a las personas adecuadas para tu organización y así potenciar el crecimiento del negocio.';
		$datos['content'] = 'va_conmigo/vision_mision_valores';
		$this->load->view('layout', $datos);
	}
	
	function adn()
	{
		$this->ViewBag['layout_title'] = "ADN Brivé";
		$datos['home'] = false;
		$datos['urlBanner2'] = 'img/va-conmigo.png';
		$datos['tituloH4'] = 'Evaluatest va conmigo en la alineación de mi talento';
		$datos['descripcion'] =  'Diagnostica el Talento y agiliza tus procesos de Atracción y Desarrollo, encuentra a las personas adecuadas para tu organización y así potenciar el crecimiento del negocio.';
		$datos['content'] = 'va_conmigo/adn';
		$this->load->view('layout', $datos);
	}
	
	function colabora()
	{
		$this->ViewBag['layout_title'] = "Colabora en nuestro Equipo";
		$datos['home'] = false;
		$datos['urlBanner2'] = 'img/va-conmigo.png';
		$datos['tituloH4'] = 'Evaluatest va conmigo en la alineación de mi talento';
		$datos['descripcion'] =  'Diagnostica el Talento y agiliza tus procesos de Atracción y Desarrollo, encuentra a las personas adecuadas para tu organización y así potenciar el crecimiento del negocio.';
		$datos['content'] = 'va_conmigo/colabora';
		$this->load->view('layout', $datos);
	}
	
	function socio_de_negocios()
	{
		$this->ViewBag['layout_title'] = "Convertirse en socio de negocios";
		$datos['home'] = false;
		$datos['urlBanner2'] = 'img/va-conmigo.png';
		$datos['tituloH4'] = 'Evaluatest va conmigo en la alineación de mi talento';
		$datos['descripcion'] =  'Diagnostica el Talento y agiliza tus procesos de Atracción y Desarrollo, encuentra a las personas adecuadas para tu organización y así potenciar el crecimiento del negocio.';
		$datos['content'] = 'va_conmigo/socio_de_negocios';
		$this->load->view('layout', $datos);
	}
	
	function cambiando_historias()
	{
		$this->ViewBag['layout_title'] = "Cambiando Historias";
		$datos['home'] = false;
		$datos['urlBanner2'] = 'img/va-conmigo.png';
		$datos['tituloH4'] = 'Evaluatest va conmigo en la alineación de mi talento';
		$datos['descripcion'] =  'Diagnostica el Talento y agiliza tus procesos de Atracción y Desarrollo, encuentra a las personas adecuadas para tu organización y así potenciar el crecimiento del negocio.';
		$datos['content'] = 'va_conmigo/cambiando_historias';
		$this->load->view('layout', $datos);
	}
	
	function responsabilidad_social()
	{
		$this->ViewBag['layout_title'] = "Responsabilidad Social";
		$datos['home'] = false;
		$datos['urlBanner2'] = 'img/va-conmigo.png';
		$datos['tituloH4'] = 'Evaluatest va conmigo en la alineación de mi talento';
		$datos['descripcion'] =  'Diagnostica el Talento y agiliza tus procesos de Atracción y Desarrollo, encuentra a las personas adecuadas para tu organización y así potenciar el crecimiento del negocio.';
		$datos['content'] = 'va_conmigo/responsabilidad_social';
		$this->load->view('layout', $datos);
	}
/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */