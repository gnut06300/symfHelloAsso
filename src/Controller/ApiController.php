<?php

namespace App\Controller;

use App\Services\CallApiService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api')]
class ApiController extends AbstractController
{
    
    #[Route('/login', name: 'api', methods: ['GET'],defaults: ['reactRouting' => null])]
    public function index(CallApiService $service): Response
    {
        $org = $service->getAccessToken();
        dd($org);
        return $this->json($org);
    }

    
}
