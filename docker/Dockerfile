# Starting from the official PHP 8.1 image
FROM php:8.1-apache
# Install the PHP pdo_pgsql and intl extensions to connect to PostgreSQL and use intl
ADD https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions /usr/local/bin/
# First make the file executable and then run it to install the pdo_pgsql and intl extensions
RUN chmod +x /usr/local/bin/install-php-extensions && \
    install-php-extensions pdo_pgsql intl
# Install compose
RUN curl -sSk https://getcomposer.org/installer | php -- --disable-tls && \
   mv composer.phar /usr/local/bin/composer

RUN curl -sL https://deb.nodesource.com/setup_19.x -o /tmp/nodesource_setup.sh  && \
    bash /tmp/nodesource_setup.sh && \
    apt install -y nodejs && \
    npm install --global yarn

COPY . /var/www/

COPY ./docker/apache.conf /etc/apache2/sites-available/000-default.conf

WORKDIR /var/www
RUN composer install && yarn install && yarn build

ENTRYPOINT ["bash", "./docker/docker.sh"]

EXPOSE 80