<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class consultoria extends CI_Controller {

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
	function diseno_desarrollo()
	{
		$this->ViewBag['layout_title'] = "Visión, Misión y Valores";
		$datos['home'] = false;
		$datos['urlBanner2'] = 'img/va-conmigo.png';
		$datos['descripcion'] =  'Diagnostica el Talento y agiliza tus procesos de Atracción y Desarrollo, encuentra a las personas adecuadas para tu organización y así potenciar el crecimiento del negocio.';
		$datos['content'] = 'consultoria/diseno_desarrollo';
		$this->load->view('layout', $datos);
	}
	
	function mapeo_psicometrias()
	{
		$this->ViewBag['layout_title'] = "ADN Brivé";
		$datos['home'] = false;
		$datos['urlBanner2'] = 'img/va-conmigo.png';
		$datos['descripcion'] =  'Diagnostica el Talento y agiliza tus procesos de Atracción y Desarrollo, encuentra a las personas adecuadas para tu organización y así potenciar el crecimiento del negocio.';
		$datos['content'] = 'consultoria/mapeo_psicometrias';
		$this->load->view('layout', $datos);
	}
	
	function centro_competencias()
	{
		$this->ViewBag['layout_title'] = "Colabora en nuestro Equipo";
		$datos['home'] = false;
		$datos['urlBanner2'] = 'img/va-conmigo.png';
		$datos['descripcion'] =  'Diagnostica el Talento y agiliza tus procesos de Atracción y Desarrollo, encuentra a las personas adecuadas para tu organización y así potenciar el crecimiento del negocio.';
		$datos['content'] = 'consultoria/centro_competencias';
		$this->load->view('layout', $datos);
	}
	
	function servicios_evaluacion()
	{
		$this->ViewBag['layout_title'] = "Convertirse en socio de negocios";
		$datos['home'] = false;
		$datos['urlBanner2'] = 'img/va-conmigo.png';
		$datos['descripcion'] =  'Diagnostica el Talento y agiliza tus procesos de Atracción y Desarrollo, encuentra a las personas adecuadas para tu organización y así potenciar el crecimiento del negocio.';
		$datos['content'] = 'consultoria/servicios_evaluacion';
		$this->load->view('layout', $datos);
	}
	
	function evaluacion_360()
	{
		$this->ViewBag['layout_title'] = "Cambiando Historias";
		$datos['home'] = false;
		$datos['urlBanner2'] = 'img/va-conmigo.png';
		$datos['descripcion'] =  'Diagnostica el Talento y agiliza tus procesos de Atracción y Desarrollo, encuentra a las personas adecuadas para tu organización y así potenciar el crecimiento del negocio.';
		$datos['content'] = 'consultoria/evaluacion_360';
		$this->load->view('layout', $datos);
	}
	
	function estudio_inventario()
	{
		$this->ViewBag['layout_title'] = "Responsabilidad Social";
		$datos['home'] = false;
		$datos['urlBanner2'] = 'img/va-conmigo.png';
		$datos['descripcion'] =  'Es la solución que permite identificar al talento de la organización, potenciarlo y lograr mejores esultados de negocio.';
		$datos['content'] = 'consultoria/estudio_inventario';
		$this->load->view('layout', $datos);
	}

	function estudio_inventario_fuerza()
	{
		$this->ViewBag['layout_title'] = "Responsabilidad Social";
		$datos['home'] = false;
		$datos['urlBanner2'] = 'img/va-conmigo.png';
		$datos['descripcion'] =  'Es una solución de diagnóstico ideal para identificar las principales habilidades del equipo comercial, así como aquellas áreas que requieren desarrollo; con base en este análisis se determinan las necesidades y planes de capacitación que permitirán incrementar la efectividad de la fuerza de ventas.';
		$datos['content'] = 'consultoria/estudio_inventario_fuerza';
		$this->load->view('layout', $datos);
	}

	function estudio_clima()
	{
		$this->ViewBag['layout_title'] = "Responsabilidad Social";
		$datos['home'] = false;
		$datos['urlBanner2'] = 'img/va-conmigo.png';
		$datos['descripcion'] =  'Conoce qué mejoras se pueden realizar en el entorno organizacional para incrementar la productividad de los colaboradores y arraigar el compromiso de lograr los objetivos de negocio.';
		$datos['content'] = 'consultoria/estudio_clima';
		$this->load->view('layout', $datos);
	}

}
/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */