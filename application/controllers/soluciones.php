<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class soluciones extends CI_Controller {

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
	function vivelo()
	{
		$this->ViewBag['layout_title'] = "Evaluatest&reg; Vívelo";
		$datos['home'] = false;
		$datos['urlBanner2'] = 'img/va-conmigo.png';
		$datos['descripcion'] =  'Es la solución que permite al área de capital humano controlar y optimizar el proceso de diagnóstico y selección de talento idóneo, concentrando la información necesaria para la toma de decisiones y logrando una reducción en costos y tiempos.';
		$datos['content'] = 'soluciones/vivelo';
		$this->load->view('layout', $datos);
	}
	
	function inside()
	{
		$this->ViewBag['layout_title'] = "Evaluatest® inside";
		$datos['home'] = false;
		$datos['urlBanner2'] = 'img/va-conmigo.png';
		$datos['descripcion'] =  'Es la solución adecuada para las empresas que desean tomar las mejores decisiones y  profesionalizar su proceso de selección de talento. Mediante la integración de las mejores prácticas de diagnóstico por competencias en la empresa, se hace posible la optimización del proceso de selección y la reducción de costos.';
		$datos['content'] = 'soluciones/inside';
		$this->load->view('layout', $datos);
	}
	
	function now()
	{
		$this->ViewBag['layout_title'] = "Evaluatest® now";
		$datos['home'] = false;
		$datos['urlBanner2'] = 'img/va-conmigo.png';
		$datos['descripcion'] =  'Esta solución facilita la aplicación de pruebas psicométricas a bajo costo; podrá obtener información  confiable y precisa durante sus procesos de selección y desarrollo de talento.';
		$datos['content'] = 'soluciones/now';
		$this->load->view('layout', $datos);
	}
	
	function esic()
	{
		$this->ViewBag['layout_title'] = "Evaluatest® ESIC";
		$datos['home'] = false;
		$datos['urlBanner2'] = 'img/va-conmigo.png';
		$datos['descripcion'] =  '';
		$datos['content'] = 'soluciones/esic';
		$this->load->view('layout', $datos);
	}
	
	function desempeno()
	{
		$this->ViewBag['layout_title'] = "Evaluatest® Desempeño";
		$datos['home'] = false;
		$datos['urlBanner2'] = 'img/va-conmigo.png';
		$datos['tituloH4'] = 'Evaluatest® Desempeño';
		$datos['descripcion'] =  'Permite determinar una estrategia segmentada para la gestión y desarrollo del talento alineado a la estrategia de negocio.';
		$datos['content'] = 'soluciones/desempeno';
		$this->load->view('layout', $datos);
	}
	
	function publicacion()
	{
		$this->ViewBag['layout_title'] = "Evaluatest® Publicación de vacantes";
		$datos['home'] = false;
		$datos['urlBanner2'] = 'img/va-conmigo.png';
		$datos['descripcion'] =  '';
		$datos['content'] = 'soluciones/publicacion';
		$this->load->view('layout', $datos);
	}
	
	function entorno()
	{
		$this->ViewBag['layout_title'] = "Evaluatest® Entorno";
		$datos['home'] = false;
		$datos['urlBanner2'] = 'img/va-conmigo.png';
		$datos['descripcion'] =  '';
		$datos['content'] = 'soluciones/entorno';
		$this->load->view('layout', $datos);
	}
	
	function encuesta_salida()
	{
		$this->ViewBag['layout_title'] = "Evaluatest® Encuesta de salida";
		$datos['home'] = false;
		$datos['urlBanner2'] = 'img/va-conmigo.png';
		$datos['descripcion'] =  '';
		$datos['content'] = 'soluciones/encuesta_salida';
		$this->load->view('layout', $datos);
	}
	
}
/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */
?>