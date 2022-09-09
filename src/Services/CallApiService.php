<?php

namespace App\Services;

use Symfony\Contracts\HttpClient\HttpClientInterface;




class CallApiService {

    private $client;

    public function __construct(HttpClientInterface $client) {
        $this->client = $client;
    }

    //get access_token and refresh_token and post them to x-www-form-urlencoded
    public function getAccessToken(): array 
    {
        $formFields = [
                'grant_type' =>  $_ENV['GRANT_TYPE'],
                'client_id' => $_ENV['CLIENT_ID'],
                'client_secret' => $_ENV['CLIENT_SECRET'],
        ];
        $resp = $this->client->request('POST', 'https://api.helloasso.com/oauth2/token', [
            'headers' => [
                'Content-Type' => 'application/x-www-form-urlencoded',
            ],
            'body' => $formFields,
        ]);
        // dd($resp);
        $statusCode = $resp->getStatusCode();  
        if ($statusCode == 200) {
            $content = $resp->toArray();
            // dd($content);
            return $content;
        } else {
            return [];
        }

    }

    //get info about the association if the access_token is valid
    public function getAssociationInfo(): array 
    {
        $org = 'artprod';
        $resp = $this->client->request('GET', 'https://api.helloasso.com/v5/organizations/'.$org, [
            'headers' => [
                'Authorization' => 'Bearer ' . $this->getAccessToken()['access_token'],
            ],
        ]);
        $statusCode = $resp->getStatusCode();  
        if ($statusCode == 200) {
            $content = $resp->toArray();
            dd($content);
            return $content;
        } else {
            return [];
        }
    }

    //refresh token every 30 minutes if the access_token is expired
    // public function refreshToken(): array 
    // {
        
      
        
    // }
}