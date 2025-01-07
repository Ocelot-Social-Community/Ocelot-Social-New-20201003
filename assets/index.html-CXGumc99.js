import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,a as t,b as l,d as s,e as h,f as r,r as k,o as d}from"./app-Blg-8n75.js";const p={};function o(c,i){const a=k("RouteLink");return d(),n("div",null,[i[3]||(i[3]=t(`<h1 id="neo4j-4-4" tabindex="-1"><a class="header-anchor" href="#neo4j-4-4"><span>Neo4j 4.4</span></a></h1><p>Human Connection is a social network. Using a graph based database which can model nodes and edges natively - a network - feels like an obvious choice. We decided to use <a href="https://neo4j.com/" target="_blank" rel="noopener noreferrer">Neo4j</a>, the currently most used graph database available. The community edition of Neo4J is Free and Open Source and we try our best to keep our application compatible with the community edition only.</p><h2 id="installation-with-docker" tabindex="-1"><a class="header-anchor" href="#installation-with-docker"><span>Installation With Docker</span></a></h2><p>Run:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker-compose</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> up</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>You can access Neo4J through <a href="http://localhost:7474/" target="_blank" rel="noopener noreferrer">http://localhost:7474/</a> for an interactive Cypher shell and a visualization of the graph.</p><h2 id="installation-without-docker" tabindex="-1"><a class="header-anchor" href="#installation-without-docker"><span>Installation Without Docker</span></a></h2><p>Install the community edition of <a href="https://neo4j.com/" target="_blank" rel="noopener noreferrer">Neo4j</a> along with the plugin <a href="https://github.com/neo4j-contrib/neo4j-apoc-procedures" target="_blank" rel="noopener noreferrer">Apoc</a> on your system.</p><p>To do so, go to <a href="https://neo4j.com/download-center/#releases" target="_blank" rel="noopener noreferrer">releases</a>, choose &quot;Community Server&quot;, download the installation files for you operation system and unpack the files.</p><p>Download <a href="https://github.com/neo4j-contrib/neo4j-apoc-procedures/releases" target="_blank" rel="noopener noreferrer">Neo4j Apoc</a> and drop the <code>.jar</code> file into the <code>plugins</code> folder of the just extracted Neo4j-Server.</p><p>Then make sure to allow Apoc procedures by adding the following line to your Neo4j configuration (<code>conf/neo4j.conf</code>):</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>dbms.security.procedures.unrestricted=apoc.*</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="alternatives" tabindex="-1"><a class="header-anchor" href="#alternatives"><span>Alternatives</span></a></h3><p>You can download <a href="https://neo4j.com/download/" target="_blank" rel="noopener noreferrer">Neo4j Desktop</a> and run locally for development, spin up a <a href="https://neo4j.com/download/" target="_blank" rel="noopener noreferrer">hosted Neo4j Sandbox instance</a>, run Neo4j in one of the <a href="https://neo4j.com/developer/guide-cloud-deployment/" target="_blank" rel="noopener noreferrer">many cloud options</a>, <a href="https://neo4j.com/developer/docker/" target="_blank" rel="noopener noreferrer">spin up Neo4j in a Docker container</a>, on Arch linux you can install <a href="https://aur.archlinux.org/packages/neo4j-community/" target="_blank" rel="noopener noreferrer">neo4j-community from AUR</a> or on Debian-based systems install <a href="http://debian.neo4j.org/" target="_blank" rel="noopener noreferrer">Neo4j from the Debian Repository</a>. Just be sure to update the Neo4j connection string and credentials accordingly in <code>backend/.env</code>.</p><p>Start Neo4J and confirm the database is running at <a href="http://localhost:7474" target="_blank" rel="noopener noreferrer">http://localhost:7474</a>.</p><h2 id="operations-on-neo4j-4-4" tabindex="-1"><a class="header-anchor" href="#operations-on-neo4j-4-4"><span>Operations on Neo4j 4.4</span></a></h2><h3 id="docker-or-docker-compose" tabindex="-1"><a class="header-anchor" href="#docker-or-docker-compose"><span>Docker or Docker Compose</span></a></h3><ul><li>we need to set <code>command: [&quot;tail&quot;, &quot;-f&quot;, &quot;/dev/null&quot;]</code> in the Neo4j block of <code>docker-compose.yml</code> on top level so the Neo4j database is in maintenance mode</li></ul><h3 id="create-neo4j-dump" tabindex="-1"><a class="header-anchor" href="#create-neo4j-dump"><span>Create Neo4j Dump</span></a></h3><p>To create a dump in Neo4j running in a Docker container:</p><ul><li>set the database to maintenance mode, see above</li><li>entering the following commands:</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># connect to the Docker containers Neo4j terminal</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> exec</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -it</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> neo4j</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> bash</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># generate Dump</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">neo4j%</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> neo4j-admin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dump</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --to=/var/lib/neo4j/$(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">date</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> +%F</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">)-neo4j-dump</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># exit bash</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">neo4j%</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> exit</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># copy the dump out of the running Docker container</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">docker-image-name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&#39;neo4j&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)&gt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">:/var/lib/neo4j/neo4j-dump</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">local-folder-pat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">h&gt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">$(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">date</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> +%F</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">-neo4j-dump</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you need a specific database name, add the option <code>--database=&lt;name&gt;</code> to the command <code>neo4j-admin dump</code>.</p><p>In our deployments there are cases where the database is called <code>neo4j</code> (used by default) and in other cases <code>graph.db</code> (accidentally happened when we loaded the database into a new cluster).</p><h3 id="import-neo4j-dump" tabindex="-1"><a class="header-anchor" href="#import-neo4j-dump"><span>Import Neo4j Dump</span></a></h3><p>To import a dump into Neo4j running in a Docker container:</p><ul><li>set the database to maintenance mode, see above</li><li>entering the following commands:</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># copy the dump into the running Docker container</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">local-folder-pat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">h&gt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/neo4j-dump</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">docker-image-name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&#39;neo4j&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)&gt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">:/var/lib/neo4j/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">$(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">date</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> +%F</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">-neo4j-dump</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># connect to the Docker containers Neo4j terminal</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> exec</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -it</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> neo4j</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> bash</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># to load the dump into the database we need the following command in this terminal</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">neo4j%</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> neo4j-admin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> load</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /var/lib/neo4j/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">$(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">date</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> +%F</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">-neo4j-dump</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --force</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># leave the terminal by entering</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">neo4j%</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> exit</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you need a specific database name, add the option <code>--database=&lt;name&gt;</code> to the command <code>neo4j-admin load</code>. To find out the default database name, see below.</p><h2 id="commands" tabindex="-1"><a class="header-anchor" href="#commands"><span>Commands</span></a></h2><p>Here we describe some rarely used Cypher commands for Neo4j that are needed from time to time:</p><h3 id="index-and-constraint-commands" tabindex="-1"><a class="header-anchor" href="#index-and-constraint-commands"><span>Index And Constraint Commands</span></a></h3><p>If indexes or constraints are missing or not set correctly, the browser search will not work or the database seed for development will not work.</p><p>The indexes and constraints of our database are set in <code>backend/src/db/migrate/store.js</code>. This is where the magic happens.</p><p>It&#39;s called by our <code>prod:migrate init</code> command. This command initializes the Admin user and creates all necessary indexes and constraints in the Neo4j database.</p><p><em><strong>Calls in development</strong></em></p><p>Locally without Docker:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># in backend folder</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> yarn</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> prod:migrate</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> init</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Locally with Docker:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># in main folder</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> compose</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> exec</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> backend</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> yarn</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> prod:migrate</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> init</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>Calls in production</strong></em></p><p>Locally with Docker:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># in main folder</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> compose</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> exec</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> backend</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /bin/sh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -c</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;yarn prod:migrate init&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>On a server with Kubernetes cluster:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># tested for one backend replica</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># !!! be aware of the kubectl context !!!</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> kubectl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> default</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> exec</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -it</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> $(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">kubectl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> default</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pods</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ocelot-backend</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">awk</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;{ print $1 }&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">--</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /bin/sh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -c</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;yarn prod:migrate init&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>Enter and Exit Cypher Shell</strong></em></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># enter the bash of Neo4j database</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> kubectl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> default</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> exec</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -it</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> $(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">kubectl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> default</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pods</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ocelot-neo4j</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">awk</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;{ print $1 }&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">--</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> bash</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># enter Cypher-Shell to send Cypher commands</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">neo4j#</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cypher-shell</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># send Cypher commands</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cypher-shell#</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Cypher</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> commands</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># exit Cypher-Shell</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cypher-shell#</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> :exit</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># exit bash</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">neo4j#</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> exit</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>Cypher commands to show indexes and constraints</strong></em></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># in browser command line or Cypher shell</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># show all indexes and constraints</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> :schema</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># show all indexes</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> CALL</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> db.indexes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># show all constraints</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> CALL</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> db.constraints</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>Cypher commands to create and drop indexes and constraints</strong></em></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># in browser command line or Cypher shell</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># create indexes</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> CALL</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> db.index.fulltext.createNodeIndex</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&quot;post_fulltext_search&quot;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">,[</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&quot;Post&quot;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">],[</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&quot;title&quot;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;content&quot;]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> CALL</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> db.index.fulltext.createNodeIndex</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&quot;user_fulltext_search&quot;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">,[</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&quot;User&quot;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">],[</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&quot;name&quot;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;slug&quot;]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> CALL</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> db.index.fulltext.createNodeIndex</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&quot;tag_fulltext_search&quot;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">,[</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&quot;Tag&quot;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">],[</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&quot;id&quot;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># drop an index</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> DROP</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> CONSTRAINT</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ON</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ( </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">image:Image</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ) ASSERT image.url IS UNIQUE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># drop all indexes and constraints</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> CALL</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apoc.schema.assert</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({},{},true) YIELD label, key RETURN * ;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="database-management-commands" tabindex="-1"><a class="header-anchor" href="#database-management-commands"><span>Database Management Commands</span></a></h3><p><em><strong>Cypher commands to manage databases</strong></em></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># in browser command line or Cypher shell</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># show the default database</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> SHOW</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> DEFAULT</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> DATABASE</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># show all databases</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> SHOW</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> DATABASES</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To set the default database by configuration, use <code>NEO4J_dbms_default__database</code> as an environment variable when starting Neo4j 4.4, see <a href="https://neo4j.com/docs/operations-manual/4.4/docker/ref-settings/" target="_blank" rel="noopener noreferrer">Docker specific configuration settings</a>.</p><p>If a database with this name does not exist, an empty database with this name is created and all other databases remain. You can switch back to an existing database without damaging it.</p><p>It seems to be impossible to change the name of an existing database on the fly. To change the name of an existing database, we need to load a dump or restore a backup under a new name in Neo4j.</p>`,57)),l("p",null,[i[1]||(i[1]=s("For more information on deployment, see ")),h(a,{to:"/deployment/deployment.html#default-database-name"},{default:r(()=>i[0]||(i[0]=[s("Default Database Name")])),_:1}),i[2]||(i[2]=s("."))])])}const m=e(p,[["render",o],["__file","index.html.vue"]]),y=JSON.parse('{"path":"/neo4j/","title":"Neo4j 4.4","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Installation With Docker","slug":"installation-with-docker","link":"#installation-with-docker","children":[]},{"level":2,"title":"Installation Without Docker","slug":"installation-without-docker","link":"#installation-without-docker","children":[{"level":3,"title":"Alternatives","slug":"alternatives","link":"#alternatives","children":[]}]},{"level":2,"title":"Operations on Neo4j 4.4","slug":"operations-on-neo4j-4-4","link":"#operations-on-neo4j-4-4","children":[{"level":3,"title":"Docker or Docker Compose","slug":"docker-or-docker-compose","link":"#docker-or-docker-compose","children":[]},{"level":3,"title":"Create Neo4j Dump","slug":"create-neo4j-dump","link":"#create-neo4j-dump","children":[]},{"level":3,"title":"Import Neo4j Dump","slug":"import-neo4j-dump","link":"#import-neo4j-dump","children":[]}]},{"level":2,"title":"Commands","slug":"commands","link":"#commands","children":[{"level":3,"title":"Index And Constraint Commands","slug":"index-and-constraint-commands","link":"#index-and-constraint-commands","children":[]},{"level":3,"title":"Database Management Commands","slug":"database-management-commands","link":"#database-management-commands","children":[]}]}],"git":{"createdTime":1736228730000,"updatedTime":1736228730000,"contributors":[{"name":"Ulf Gebhardt","email":"ulf.gebhardt@webcraft-media.de","commits":1}]},"readingTime":{"minutes":3.49,"words":1048},"filePathRelative":"neo4j/README.md","localizedDate":"January 7, 2025","excerpt":"\\n<p>Human Connection is a social network. Using a graph based database which can\\nmodel nodes and edges natively - a network - feels like an obvious choice. We\\ndecided to use <a href=\\"https://neo4j.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Neo4j</a>, the currently most used graph\\ndatabase available. The community edition of Neo4J is Free and Open Source and\\nwe try our best to keep our application compatible with the community edition\\nonly.</p>"}');export{m as comp,y as data};
