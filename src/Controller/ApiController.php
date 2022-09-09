<?php

namespace App\Controller;

use App\Services\CallApiService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class ApiController extends AbstractController
{
    #[Route('/{reactRouting}', name: 'api', methods: ['GET'],defaults: ['reactRouting' => null])]
    public function index(): Response
    {
        return $this->render('api/index.html.twig');
    }

    
    #[Route('/api/login', name: 'login', methods: ['GET'],defaults: ['reactRouting' => null])]
    public function login(CallApiService $service): Response
    {
        $org = $service->getAccessToken();
        // dd($org);
        return $this->json($org);
    }

    #[Route('/api/org', name: 'org', methods: ['GET'],defaults: ['reactRouting' => null])]
    public function org(CallApiService $service): Response
    {
        $org = $service->getAssociationInfo();
        // dd($org);
        return $this->json($org);
    }


    
}
