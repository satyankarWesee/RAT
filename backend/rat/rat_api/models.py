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
