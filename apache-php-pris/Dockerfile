FROM php:8.1-apache
#Enviroments
ENV LANGUAGE=es_ES.UTF-8
ENV LC_ALL=es_ES.UTF-8
ENV LC_CTYPE=UTF-8
ENV LANG=es_ES.UTF-8
ENV TZ=Europe/Madrid
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
    apt-get install -y locales && \ 
    apt-get install -y nano && \ 
    apt-get install -y wkhtmltopdf && \ 
    apt-get install -y supervisor && \ 
    apt-get install default-mysql-client -y && \ 
    apt-get install -y certbot python3-certbot-apache && \ 
    printf 'es_ES.UTF-8 UTF-8\n' >> /etc/locale.gen && \
    locale-gen

#Esto es para la creacion de la carpeta con los permisos de supervisor
RUN mkdir -p /var/run
RUN chown -R www-data:www-data /var/run

RUN curl -sS https://getcomposer.org/installer | php -- \
        --install-dir=/usr/local/bin \
        --filename=composer

RUN docker-php-ext-install mysqli pdo_mysql
RUN docker-php-ext-install gd
RUN docker-php-ext-install zip

# Symblink for the snappy pdf 
RUN ln -s /usr/bin/wkhtmltopdf /usr/local/bin/wkhtmltopdf && ln -s /usr/bin/wkhtmltoimage /usr/local/bin/wkhtmltoimage

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

#PHPUNIT
RUN composer global require "phpunit/phpunit"
RUN ln -s /root/.composer/vendor/bin/phpunit /usr/bin/phpunit
#Rewrite is necessary for the cors 
RUN a2enmod rewrite


COPY supervisor/edinsa.conf /etc/supervisor/conf.d/edinsa.conf
CMD ["supervisord", "-n"]



# Use the default production configuration
#COPY php/php.ini /usr/local/etc/php/conf.d/custom-php.ini


