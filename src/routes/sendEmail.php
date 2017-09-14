<?php

$app->post('/api/MailGun/sendEmail', function ($request, $response) {

    $settings = $this->settings;
    $checkRequest = $this->validation;
    $validateRes = $checkRequest->validate($request, ['apiKey','domain','mFrom','mTo']);

    if(!empty($validateRes) && isset($validateRes['callback']) && $validateRes['callback']=='error') {
        return $response->withHeader('Content-type', 'application/json')->withStatus(200)->withJson($validateRes);
    } else {
        $post_data = $validateRes;
    }

    $requiredParams = ['apiKey'=>'apiKey','domain'=>'domain','mFrom'=>'from','mTo'=>'to'];
    $optionalParams = ['cc'=>'cc','bcc'=>'bcc','subject'=>'subject','text'=>'text','html'=>'html','inline'=>'inline','o:tag'=>'o:tag','o:campaign'=>'o:campaign','o:dkim'=>'o:dkim','o:deliverytime'=>'o:deliverytime','o:testmode'=>'o:testmode','o:tracking'=>'o:tracking','o:tracking-clicks'=>'o:tracking-clicks','o:tracking-opens'=>'o:tracking-opens','o:require-tls'=>'o:require-tls','o:skip-verification'=>'o:skip-verification','h:X-My-Header'=>'h:X-My-Header','v:my-var'=>'v:my-var'];
    $bodyParams = [
       'form_params' => ['from','to','bcc','subject','text','html','inline','o:tag','o:campaign','o:dkim','o:deliverytime','o:testmode','o:tracking','o:tracking-clicks','o:tracking-opens','o:require-tls','o:skip-verification','h:X-My-Header','v:my-var']
    ];

    $data = \Models\Params::createParams($requiredParams, $optionalParams, $post_data['args']);
    $data['to'] = \Models\Params::toString($data['to']);
    if(isset($data['o:deliverytime'])){
        $data['o:deliverytime'] = \Models\Params::toFormat($data['o:deliverytime'], 'D, d M Y H:i:s O');
    }

    $client = $this->httpClient;
    $query_str = "https://api.mailgun.net/v3/{$data['domain']}/messages";



    $requestParams = \Models\Params::createRequestBody($data, $bodyParams);
    $requestParams['headers'] = [];
    $requestParams['auth'] = ['api',$data['apiKey']];

    try {
        $resp = $client->post($query_str, $requestParams);
        $responseBody = $resp->getBody()->getContents();

        if(in_array($resp->getStatusCode(), ['200', '201', '202', '203', '204'])) {
            $result['callback'] = 'success';
            $result['contextWrites']['to'] = is_array($responseBody) ? $responseBody : json_decode($responseBody);
            if(empty($result['contextWrites']['to'])) {
                $result['contextWrites']['to']['status_msg'] = "Api return no results";
            }
        } else {
            $result['callback'] = 'error';
            $result['contextWrites']['to']['status_code'] = 'API_ERROR';
            $result['contextWrites']['to']['status_msg'] = json_decode($responseBody);
        }

    } catch (\GuzzleHttp\Exception\ClientException $exception) {

        $responseBody = $exception->getResponse()->getBody()->getContents();
        if(empty(json_decode($responseBody))) {
            $out = $responseBody;
        } else {
            $out = json_decode($responseBody);
        }
        $result['callback'] = 'error';
        $result['contextWrites']['to']['status_code'] = 'API_ERROR';
        $result['contextWrites']['to']['status_msg'] = $out;

    } catch (GuzzleHttp\Exception\ServerException $exception) {

        $responseBody = $exception->getResponse()->getBody()->getContents();
        if(empty(json_decode($responseBody))) {
            $out = $responseBody;
        } else {
            $out = json_decode($responseBody);
        }
        $result['callback'] = 'error';
        $result['contextWrites']['to']['status_code'] = 'API_ERROR';
        $result['contextWrites']['to']['status_msg'] = $out;

    } catch (GuzzleHttp\Exception\ConnectException $exception) {

        $responseBody = $exception->getResponse()->getBody(true);
        $result['callback'] = 'error';
        $result['contextWrites']['to']['status_code'] = 'INTERNAL_PACKAGE_ERROR';
        $result['contextWrites']['to']['status_msg'] = 'Something went wrong inside the package.';

    }

    return $response->withHeader('Content-type', 'application/json')->withStatus(200)->withJson($result);

});
