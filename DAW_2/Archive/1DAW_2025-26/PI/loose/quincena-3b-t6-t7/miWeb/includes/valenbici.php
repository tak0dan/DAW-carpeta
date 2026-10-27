<?php

declare(strict_types=1);

function valenbici_log(string $message): void
{
    $logDir = dirname(__DIR__) . '/logs';
    if (!is_dir($logDir)) {
        @mkdir($logDir, 0755, true);
    }
    $logFile = $logDir . '/valenbici-web.log';
    $timestamp = date('Y-m-d H:i:s');
    $line = "[$timestamp] $message" . PHP_EOL;
    @file_put_contents($logFile, $line, FILE_APPEND | LOCK_EX);
}

function valenbici_lang(): string
{
    $lang = strtolower((string) ($_GET['lang'] ?? 'es'));
    return $lang === 'en' ? 'en' : 'es';
}

function valenbici_switch_lang(string $lang): string
{
    return $lang === 'es' ? 'en' : 'es';
}

function valenbici_messages(string $lang): array
{
    $messages = [
        'es' => [
            'site_title' => 'Valenbici JDG',
            'home_title' => 'Disponibilidad de estaciones Valenbici',
            'home_intro' => 'Consulta bicicletas, anclajes libres, estado operativo y coordenadas de las estaciones.',
            'map_title' => 'Mapa de estaciones Valenbici',
            'map_intro' => 'Visualiza en un mapa las estaciones obtenidas desde la API municipal.',
            'summary_total' => 'Estaciones cargadas',
            'summary_bikes' => 'Bicicletas disponibles',
            'summary_slots' => 'Anclajes libres',
            'summary_updated' => 'Ultima actualizacion',
            'summary_no_data' => 'Sin datos',
            'go_map' => 'Ver mapa de estaciones',
            'go_table' => 'Ver tabla de estaciones',
            'switch_label' => 'English',
            'json_saved' => 'Datos guardados en data.json',
            'table_address' => 'Direccion',
            'table_number' => 'Numero',
            'table_open' => 'Abierta',
            'table_available' => 'Disponibles',
            'table_free' => 'Libres',
            'table_total' => 'Total',
            'table_updated' => 'Actualizado',
            'table_lat' => 'Latitud',
            'table_lon' => 'Longitud',
            'popup_bikes' => 'Bicis',
            'popup_free' => 'Libres',
            'yes' => 'Si',
            'no' => 'No',
            'error_title' => 'Error al cargar datos',
            'map_empty' => 'No hay estaciones para mostrar en el mapa.',
            'footer_text' => 'Proyecto intermodular con API, MySQL, Docker y soporte bilingue.',
        ],
        'en' => [
            'site_title' => 'Valenbici JDG',
            'home_title' => 'Valenbici station availability',
            'home_intro' => 'Check bikes, free docks, operating status and coordinates for each station.',
            'map_title' => 'Valenbici station map',
            'map_intro' => 'Display the stations returned by the city API on an interactive map.',
            'summary_total' => 'Loaded stations',
            'summary_bikes' => 'Available bikes',
            'summary_slots' => 'Free docks',
            'summary_updated' => 'Last update',
            'summary_no_data' => 'No data',
            'go_map' => 'View station map',
            'go_table' => 'View station table',
            'switch_label' => 'Castellano',
            'json_saved' => 'Data saved into data.json',
            'table_address' => 'Address',
            'table_number' => 'Number',
            'table_open' => 'Open',
            'table_available' => 'Available',
            'table_free' => 'Free',
            'table_total' => 'Total',
            'table_updated' => 'Updated',
            'table_lat' => 'Latitude',
            'table_lon' => 'Longitude',
            'popup_bikes' => 'Bikes',
            'popup_free' => 'Free docks',
            'yes' => 'Yes',
            'no' => 'No',
            'error_title' => 'Error while loading data',
            'map_empty' => 'There are no stations to display on the map.',
            'footer_text' => 'Intermodular project with API, MySQL, Docker and bilingual support.',
        ],
    ];

    return $messages[$lang];
}

function valenbici_build_url(string $script, string $lang): string
{
    return $script . '?lang=' . rawurlencode($lang);
}

function epsg25830_to_wgs84(float $easting, float $northing): array
{
    $a = 6378137.0;
    $f = 1 / 298.257222101;
    $k0 = 0.9996;
    $zone = 30;
    $falseEasting = 500000.0;
    $falseNorthing = 0.0;

    $e = sqrt($f * (2 - $f));
    $e1sq = ($e * $e) / (1 - $e * $e);
    $x = $easting - $falseEasting;
    $y = $northing - $falseNorthing;

    $m = $y / $k0;
    $mu = $m / ($a * (1 - ($e ** 2) / 4 - 3 * ($e ** 4) / 64 - 5 * ($e ** 6) / 256));

    $e1 = (1 - sqrt(1 - $e * $e)) / (1 + sqrt(1 - $e * $e));
    $j1 = 3 * $e1 / 2 - 27 * ($e1 ** 3) / 32;
    $j2 = 21 * ($e1 ** 2) / 16 - 55 * ($e1 ** 4) / 32;
    $j3 = 151 * ($e1 ** 3) / 96;
    $j4 = 1097 * ($e1 ** 4) / 512;

    $fp = $mu
        + $j1 * sin(2 * $mu)
        + $j2 * sin(4 * $mu)
        + $j3 * sin(6 * $mu)
        + $j4 * sin(8 * $mu);

    $sinFp = sin($fp);
    $cosFp = cos($fp);
    $tanFp = tan($fp);
    $c1 = $e1sq * $cosFp * $cosFp;
    $t1 = $tanFp * $tanFp;
    $r1 = $a * (1 - $e * $e) / ((1 - ($e * $e * $sinFp * $sinFp)) ** 1.5);
    $n1 = $a / sqrt(1 - ($e * $e * $sinFp * $sinFp));
    $d = $x / ($n1 * $k0);

    $latRad = $fp - ($n1 * $tanFp / $r1) * (
        ($d ** 2) / 2
        - (5 + 3 * $t1 + 10 * $c1 - 4 * $c1 * $c1 - 9 * $e1sq) * ($d ** 4) / 24
        + (61 + 90 * $t1 + 298 * $c1 + 45 * $t1 * $t1 - 252 * $e1sq - 3 * $c1 * $c1) * ($d ** 6) / 720
    );

    $lonOrigin = deg2rad(($zone - 1) * 6 - 180 + 3);
    $lonRad = $lonOrigin + (
        $d
        - (1 + 2 * $t1 + $c1) * ($d ** 3) / 6
        + (5 - 2 * $c1 + 28 * $t1 - 3 * $c1 * $c1 + 8 * $e1sq + 24 * $t1 * $t1) * ($d ** 5) / 120
    ) / $cosFp;

    return [
        'latitude' => rad2deg($latRad),
        'longitude' => rad2deg($lonRad),
    ];
}

function normalize_valenbici_geometry(array $geometry): array
{
    $x = isset($geometry['x']) ? (float) $geometry['x'] : 0.0;
    $y = isset($geometry['y']) ? (float) $geometry['y'] : 0.0;
    $looksLikeLonLat = $x >= -180 && $x <= 180 && $y >= -90 && $y <= 90;

    if ($looksLikeLonLat) {
        return [
            'latitude' => $y,
            'longitude' => $x,
        ];
    }

    return epsg25830_to_wgs84($x, $y);
}

function fetch_valenbici_data(): array
{
    $url = 'https://geoportal.valencia.es/server/rest/services/OPENDATA/Trafico/MapServer/228/query'
        . '?where=1%3D1'
        . '&outFields=*'
        . '&returnGeometry=true'
        . '&outSR=4326'
        . '&f=json';

    valenbici_log('Inicio fetch API: ' . $url);
    $startTime = microtime(true);
    $rawBody = '';
    $error = null;

    if (function_exists('curl_init')) {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, ['Accept: application/json']);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        $response = curl_exec($ch);

        if ($response === false) {
            $error = curl_error($ch);
            valenbici_log('Error cURL: ' . $error);
        } else {
            $statusCode = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
            $durationMs = (int) ((microtime(true) - $startTime) * 1000);
            valenbici_log('cURL respuesta HTTP ' . $statusCode . ' (' . $durationMs . 'ms)');
            if ($statusCode !== 200) {
                $error = 'HTTP ' . $statusCode;
            } else {
                $rawBody = (string) $response;
            }
        }

        curl_close($ch);
    } else {
        $context = stream_context_create([
            'http' => [
                'method' => 'GET',
                'header' => "Accept: application/json\r\nUser-Agent: ValenbiciJDG/1.0\r\n",
                'timeout' => 20,
            ],
            'ssl' => [
                'verify_peer' => false,
                'verify_peer_name' => false,
            ],
        ]);
        $response = @file_get_contents($url, false, $context);

        if ($response === false) {
            $error = 'No se ha podido recuperar la API ni con cURL ni con file_get_contents.';
            valenbici_log('Error file_get_contents: ambos metodos fallaron');
        } else {
            $rawBody = (string) $response;
            valenbici_log('file_get_contents OK: ' . strlen($rawBody) . ' bytes');
        }
    }

    if ($error !== null) {
        valenbici_log('Error final: ' . $error);
        throw new RuntimeException($error);
    }

    valenbici_log('JSON descargado: ' . strlen($rawBody) . ' bytes');

    $data = json_decode($rawBody, true);
    if (!is_array($data) || !isset($data['features']) || !is_array($data['features'])) {
        valenbici_log('Error: JSON no contiene features');
        throw new RuntimeException('La respuesta JSON no contiene el array features.');
    }

    $stations = [];
    $converted = 0;

    foreach ($data['features'] as $station) {
        $attributes = $station['attributes'] ?? [];
        $geometry = normalize_valenbici_geometry($station['geometry'] ?? []);
        $number = (string) ($attributes['number'] ?? '');

        if ($number === '') {
            continue;
        }

        $stations[$number] = [
            'number' => (int) $number,
            'address' => (string) ($attributes['address'] ?? 'Sin direccion'),
            'open' => (($attributes['open'] ?? 'F') === 'T'),
            'available' => (int) ($attributes['available'] ?? 0),
            'free' => (int) ($attributes['free'] ?? 0),
            'total' => (int) ($attributes['total'] ?? 0),
            'updated_at' => (string) ($attributes['updated_at'] ?? 'Sin fecha'),
            'latitude' => round((float) $geometry['latitude'], 7),
            'longitude' => round((float) $geometry['longitude'], 7),
        ];
    }

    ksort($stations, SORT_NATURAL);
    valenbici_log('Procesadas ' . count($stations) . ' estaciones');
    return $stations;
}

function load_or_refresh_valenbici_data(bool $forceRefresh = true): array
{
    $filePath = dirname(__DIR__) . '/data.json';

    try {
        if (!$forceRefresh && file_exists($filePath)) {
            $saved = json_decode((string) file_get_contents($filePath), true);
            if (is_array($saved) && $saved !== []) {
                valenbici_log('Datos cargados desde cache: ' . $filePath . ' (' . count($saved) . ' estaciones)');
                return [
                    'stations' => $saved,
                    'file_path' => $filePath,
                    'error' => null,
                ];
            }
        }

        valenbici_log('Forzando recarga desde API (forceRefresh=' . ($forceRefresh ? 'true' : 'false') . ')');
        $stations = fetch_valenbici_data();
        $json = json_encode($stations, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
        $saved = file_put_contents($filePath, $json);

        if ($saved === false) {
            valenbici_log('Error: no se pudo escribir ' . $filePath);
            throw new RuntimeException('No se ha podido guardar el archivo data.json.');
        }

        valenbici_log('Cache guardado: ' . $filePath . ' (' . $saved . ' bytes, ' . count($stations) . ' estaciones)');
        return [
            'stations' => $stations,
            'file_path' => $filePath,
            'error' => null,
        ];
    } catch (Throwable $exception) {
        valenbici_log('ERROR: ' . $exception->getMessage());
        return [
            'stations' => [],
            'file_path' => $filePath,
            'error' => $exception->getMessage(),
        ];
    }
}
