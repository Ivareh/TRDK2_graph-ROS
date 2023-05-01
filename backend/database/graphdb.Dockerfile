# DO NOT PUSH TO DOCKER HUB
# This dockerfile can possibly build a licensed image
# Only use this for local development
FROM ontotext/graphdb:10.2.0
EXPOSE 7200
RUN mkdir -p /opt/graphdb/dist/conf
COPY conf/ /opt/graphdb/dist/conf
COPY ontology/ /opt/graphdb/home/ontology
ENV GDB_JAVA_OPTS="-Dgraphdb.license.file=/opt/graphdb/dist/conf/graphdb.license"
RUN /opt/graphdb/dist/bin/loadrdf -c /opt/graphdb/dist/conf/TRDK2_graph-ROS-config.ttl -m parallel /opt/graphdb/home/ontology --force
