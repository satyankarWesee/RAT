from django.db import models

class RemoteTool(models.Model):
    ip_address = models.GenericIPAddressField(primary_key=True, protocol='both')  # 'inet' type
    os_name = models.CharField(max_length=100)
    os_version = models.CharField(max_length=50)
    sample1 = models.CharField(max_length=100, null=True, blank=True)
    sample2 = models.CharField(max_length=100, null=True, blank=True)
    sample3 = models.CharField(max_length=100, null=True, blank=True)
    
    # Status is constrained by the DB; we reflect it as a CharField
    STATUS_CHOICES = [
        ('green', 'Green'),
        ('red', 'Red'),
        ('grey', 'Grey'),
    ]
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, null=True, blank=True)

    class Meta:
        managed = False  # Prevent Django from creating/migrating this table
        db_table = 'remote_tool'


class SystemAudit(models.Model):
    antivirus_updated_date = models.DateField(null=True, blank=True)
    av_activated_on = models.DateField(null=True, blank=True)
    last_admin_account_used = models.DateField(null=True, blank=True)
    last_password_change = models.DateField(null=True, blank=True)
    av_expiring_on = models.DateField(null=True, blank=True)
    os_updated_date = models.DateField(null=True, blank=True)
    ip_address = models.GenericIPAddressField(protocol='both', primary_key=True)
    
    bootup_password_bios = models.TextField(null=True, blank=True)
    supervisor_password_bios_enabled = models.TextField(null=True, blank=True)
    first_boot_device = models.TextField(null=True, blank=True)
    boot_removable_media_disabled = models.TextField(null=True, blank=True)
    bios_version = models.TextField(null=True, blank=True)
    antivirus_installed = models.TextField(null=True, blank=True)
    av_firewall_enabled = models.TextField(null=True, blank=True)
    remote_logging_disabled = models.TextField(null=True, blank=True)
    rdp_ports_open = models.TextField(null=True, blank=True)
    rdp_brute_force_protection_enabled = models.TextField(null=True, blank=True)
    ssh_status = models.TextField(null=True, blank=True)
    telnet_status = models.TextField(null=True, blank=True)
    latest_browser_version_installed = models.TextField(null=True, blank=True)
    browser_password_autosave_disabled = models.TextField(null=True, blank=True)
    browser_history_autosave_disabled = models.TextField(null=True, blank=True)
    social_media_browsing = models.TextField(null=True, blank=True)
    installed_addons_list = models.TextField(null=True, blank=True)
    password_autofill_disabled = models.TextField(null=True, blank=True)
    cookie_retention_settings = models.TextField(null=True, blank=True)
    senic_version = models.TextField(null=True, blank=True)
    senic_guard_sd_version = models.TextField(null=True, blank=True)
    senic_admin_installed_version = models.TextField(null=True, blank=True)
    seclore_client_installed = models.TextField(null=True, blank=True)
    sccm_client_installed = models.TextField(null=True, blank=True)
    secem_installed = models.TextField(null=True, blank=True)
    non_whitelisted_software_installed = models.TextField(null=True, blank=True)
    connected_to_unit_lan = models.TextField(null=True, blank=True)
    network_connection_type = models.TextField(null=True, blank=True)
    internet_access_detected = models.TextField(null=True, blank=True)
    nat_proxies_in_use = models.TextField(null=True, blank=True)
    open_outbound_ports = models.TextField(null=True, blank=True)
    cloud_sync_services_disabled = models.TextField(null=True, blank=True)
    modems_installed = models.TextField(null=True, blank=True)
    admin_privilege_users = models.TextField(null=True, blank=True)
    inbuilt_admin_account_disabled = models.TextField(null=True, blank=True)
    guest_account_disabled = models.TextField(null=True, blank=True)
    admin_account_used = models.TextField(null=True, blank=True)
    domain_user_login = models.TextField(null=True, blank=True)
    login_password_set = models.TextField(null=True, blank=True)
    fpehchaan_id_login = models.TextField(null=True, blank=True)
    password_complexity_policy_enabled = models.TextField(null=True, blank=True)
    password_expiry_policy_enforced = models.TextField(null=True, blank=True)
    account_lockout_threshold = models.TextField(null=True, blank=True)
    alternative_login_disabled = models.TextField(null=True, blank=True)
    screensaver_password_enabled = models.TextField(null=True, blank=True)
    clean_desktop_policy_implemented = models.TextField(null=True, blank=True)
    screen_timeout_limit = models.TextField(null=True, blank=True)
    custom_screensaver_path = models.TextField(null=True, blank=True)
    drives_present = models.TextField(null=True, blank=True)
    unauthorized_usb_usage = models.TextField(null=True, blank=True)
    autorun_disabled_removable_media = models.TextField(null=True, blank=True)
    cd_dvd_drive_disabled = models.TextField(null=True, blank=True)
    nodrivetypeautorun_0xff = models.TextField(null=True, blank=True)
    inf_files_found = models.TextField(null=True, blank=True)
    official_data_outside_senic_volume = models.TextField(null=True, blank=True)
    classified_data_in_shared_folder = models.TextField(null=True, blank=True)
    files_found_in_user = models.TextField(null=True, blank=True)
    system_make_model = models.TextField(null=True, blank=True)
    os_edition = models.TextField(null=True, blank=True)
    genuine_os_installed = models.TextField(null=True, blank=True)
    os_license_key = models.TextField(null=True, blank=True)
    multiple_os_installed = models.TextField(null=True, blank=True)
    firewall_status = models.TextField(null=True, blank=True)

    class Meta:
        managed = False
        db_table = 'system_audit'
