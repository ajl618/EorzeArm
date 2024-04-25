FROM php:8.3-apache
#librarys
RUN apt-get update && \
    apt-get install -y wget && \
    apt-get install -y libc6 && \
    apt-get install -y libxrender1 && \
    apt-get install -y libfontconfig1  && \
    apt-get install -y libfreetype6-dev && \
    apt-get install -y libjpeg62-turbo-dev  && \
    apt-get install -y gnupg && \
    apt-get install -y software-properties-common && \
    apt-get install libldap2-dev -y && \
    apt-get install -y unzip && \
    apt-get install -y curl && \
    apt-get install -y apt-transport-https && \
    apt-get install -y git && \
    apt-get install -y cron && \
    apt-get install -y zlib1g-dev && \
    apt-get install -y libzip-dev && \
    apt-get install -y libzip-dev zip && \
    apt-get install -y libpng-dev && \
    apt-get install -y nano && \ 
    apt-get install default-mysql-client -y && \ 
    apt-get install -y certbot python3-certbot-apache  

#Esto es para la creacion de la carpeta con los permisos de supervisor
RUN mkdir -p /var/run
RUN chown -R www-data:www-data /var/run

RUN curl -sS https://getcomposer.org/installer | php -- \
        --install-dir=/usr/local/bin \
        --filename=composer

RUN docker-php-ext-install mysqli pdo_mysql
RUN docker-php-ext-install gd
RUN docker-php-ext-install zip

#PHPUNIT
RUN composer global require "phpunit/phpunit"
RUN ln -s /root/.composer/vendor/bin/phpunit /usr/bin/phpunit

RUN a2enmod headers
RUN a2enmod rewrite
RUN a2enmod proxy_http
RUN a2enmod ssl
RUN a2enmod proxy
RUN a2enmod proxy_balancer
RUN a2enmod proxy_fcgi